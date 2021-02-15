
import axios from 'axios';

const fetchData = async (serverUrl, region, locale) => {

  const metadata = axios.get(`${serverUrl}${region}/metadata?locale=${locale}`)
  .then(res => res.data)
  .then(metadata => {
    if (metadata.minionTypes) metadata.minionTypes.sort((a, b) => a.name > b.name); // sort minionTypes in alphabetical order
    return metadata;
  })
  .catch((err) => {
    console.error('Error fetching metadata:', err);
  });

  const cardData = axios.get(`${serverUrl}${region}/allcards?locale=${locale}`)
  .then(res => res.data)
  .then(data => {
    return data;
  })
  .catch((err) => {
    console.error('Error fetching card data:', err);
  });


  const promiseValues = await Promise.all([metadata, cardData]);
  const data = { metadata: promiseValues[0], cardData: promiseValues[1] }
  console.log("fetched data:", data);
  return data;
}

export default fetchData;