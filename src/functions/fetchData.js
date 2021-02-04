
const fetchData = async (serverUrl, region, locale) => {

  const metadata = fetch(`${serverUrl}${region}/metadata?locale=${locale}`)
  .then((response) => response.json())
  .then((metadataJson) => {
    if (metadataJson.minionTypes) metadataJson.minionTypes.sort((a, b) => a.name > b.name); // sort minionTypes in alphabetical order
    return metadataJson;
  })
  .catch((err) => {
    console.error('Error fetching metadata:', err);
  });

  const cardData = fetch(`${serverUrl}${region}/allcards?locale=${locale}`)
  .then(response => response.json())
  .then(cardDataJson => {
    return cardDataJson;
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