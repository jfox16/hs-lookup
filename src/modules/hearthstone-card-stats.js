function generateStatTotals(cards) {

  const totals = {};
  const statsToTrack = ['attack', 'health', 'manaCost'];

  statsToTrack.forEach(stat => {
    let total = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY,
      sum: 0,
      mean: 0,
      median: 0,
      stdev: 0,
      array: [],
      frequencies: {},
      maxFrequency: Number.NEGATIVE_INFINITY
    }
    totals[stat] = total;
  });

  cards.forEach(card => {
    statsToTrack.forEach(stat => {
      if (stat === 'manaCost' || card.cardTypeId === 4) { // only count health and attack for minions
        let value = card[stat];
        if (value < totals[stat].min) totals[stat].min = card[stat];
        totals[stat].sum += card[stat];
        totals[stat].array.push(card[stat]);

        // Add to frequencies
        let frequencies = totals[stat].frequencies;
        if (frequencies[value]) frequencies[value]++;
        else frequencies[value] = 1; 
        if (frequencies[value] > totals[stat].maxFrequency) totals[stat].maxFrequency = frequencies[value];
      }
    });
  });

  statsToTrack.forEach(stat => {
    if (Object.values(totals[stat].frequencies).length > 1) {
      totals[stat].shouldBeDisplayed = true;

      totals[stat].mean = totals[stat].sum / totals[stat].array.length;
  
      // Find Median
      totals[stat].array.sort((a,b) => a - b);
      let midPoint = Math.floor(totals[stat].array.length/2);
      if (cards.length % 2 !== 0) totals[stat].median = totals[stat].array[midPoint];
      else totals[stat].median = (totals[stat].array[midPoint-1] + totals[stat].array[midPoint+1]) / 2;
  
      // Find StDev
      let sumDiffSq = 0;
      totals[stat].array.forEach(value => sumDiffSq += Math.pow(value - totals[stat].mean, 2));
      totals[stat].stdev = Math.sqrt(sumDiffSq / totals[stat].array.length);
    }
  });

  return totals;
}


const keywordsToTrack = ['taunt', 'spellpower', 'divine-shield', 'charge', 'stealth', 'windfury', 
  'deathrattle', 'inspire', 'poisonous', 'lifesteal', 'rush', 'reborn'];

function generateKeywordTotals(cards, metadata) {

  if (!Array.isArray(cards) || !Array.isArray(metadata.keywords)) {
    return null;
  }

  const keywords = {};
  const keywordSlugs = {};
  let shouldBeDisplayed = false;
  
  // Populate dicts
  metadata.keywords.forEach(keyword => {
    if (keywordsToTrack.includes(keyword.slug)) {
      keywords[keyword.slug] = {
        name: keyword.name,
        count: 0
      };
      keywordSlugs[keyword.id] = keyword.slug;
    }
  });

  // Count keywords
  cards.forEach(card => {
    if (card.cardTypeId === 4 && card.keywordIds) {
      card.keywordIds.forEach(id => {
        let slug = keywordSlugs[id];
        if (keywords[slug]) {
          keywords[slug].count++;
          shouldBeDisplayed = true;
        }
      })
    }
  });

  console.log('keywords:', keywords);

  return { keywords, shouldBeDisplayed };
}



export { generateStatTotals, generateKeywordTotals };