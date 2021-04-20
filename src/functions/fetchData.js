
import axios from "axios";
import cardTextToKeywordIds from "functions/cardTextToKeywordIds";

const fetchData = async (serverUrl, region, locale) => {
  const metadata = axios
    .get(`${serverUrl}${region}/metadata?locale=${locale}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error("Error fetching metadata:", err);
    });

  const cardData = axios
    .get(`${serverUrl}${region}/allcards?locale=${locale}`)
    .then((res) => res.data)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error("Error fetching card data:", err);
    });

  const promiseValues = await Promise.all([metadata, cardData]);
  const data = { metadata: promiseValues[0], cardData: promiseValues[1] };
  initializeData(data.metadata, data.cardData);
  console.log("fetched data:", data);
  return data;
};

const initializeData = (metadata, cardData) => {
  cardData.cards.forEach(card => {
    if (card.keywordIds) {
      const generatedKeywordIds = cardTextToKeywordIds(card.text, metadata);
      card.keywordIds = generatedKeywordIds;
    }
  });
}

export default fetchData;
