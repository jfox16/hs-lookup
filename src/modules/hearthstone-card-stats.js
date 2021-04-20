const {
  descriptionTokens,
  keywordMinionExclusions,
} = require("./filterConstants");

function generateStatTotals(cards) {
  const totals = {};
  const statsToTrack = ["attack", "health", "manaCost"];

  statsToTrack.forEach((stat) => {
    let total = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY,
      sum: 0,
      mean: 0,
      median: 0,
      stdev: 0,
      array: [],
      frequencies: {},
      maxFrequency: Number.NEGATIVE_INFINITY,
    };
    totals[stat] = total;
  });

  cards.forEach((card) => {
    statsToTrack.forEach((stat) => {
      if (stat === "manaCost" || card.cardTypeId === 4) {
        // only count health and attack for minions
        let value = card[stat];
        if (value < totals[stat].min) totals[stat].min = card[stat];
        if (value > totals[stat].max) totals[stat].max = card[stat];
        totals[stat].sum += card[stat];
        totals[stat].array.push(card[stat]);

        // Add to frequencies
        let frequencies = totals[stat].frequencies;
        if (frequencies[value]) frequencies[value]++;
        else frequencies[value] = 1;
        if (frequencies[value] > totals[stat].maxFrequency)
          totals[stat].maxFrequency = frequencies[value];
      }
    });
  });

  statsToTrack.forEach((stat) => {
    if (Object.values(totals[stat].frequencies).length > 0) {
      totals[stat].mean = totals[stat].sum / totals[stat].array.length;

      // Find Median
      totals[stat].array.sort((a, b) => a - b);
      let midPoint = Math.floor((totals[stat].array.length - 1) / 2);
      if (cards.length % 2 !== 0) {
        totals[stat].median = totals[stat].array[midPoint]; // middle number
      } else {
        totals[stat].median =
          (totals[stat].array[midPoint] + totals[stat].array[midPoint + 1]) / 2; // avg of middle two numbers
      }

      // Find StDev
      let sumDiffSq = 0;
      totals[stat].array.forEach(
        (value) => (sumDiffSq += Math.pow(value - totals[stat].mean, 2))
      );
      totals[stat].stdev = Math.sqrt(sumDiffSq / totals[stat].array.length);
    }
  });

  return totals;
}

function generateKeywordTotals(cards, metadata) {
  if (!Array.isArray(cards) || !Array.isArray(metadata.keywords)) {
    return null;
  }

  const keywordStats = {};
  const keywordSlugs = {};
  let shouldBeDisplayed = false;

  // Populate dicts
  metadata.keywords.forEach((keyword) => {
    if (descriptionTokens.keyword[keyword.slug]) {
      keywordStats[keyword.slug] = {
        name: keyword.name,
        count: 0,
      };
      keywordSlugs[keyword.id] = keyword.slug;
    }
  });

  // Count keywords
  cards.forEach((card) => {
    if (card.keywordIds) {
      card.keywordIds.forEach((keywordId) => {
        let slug = keywordSlugs[keywordId];
        if (
          keywordStats[slug]
        ) {
          keywordStats[slug].count++;
          shouldBeDisplayed = true;
        }
      });
    }
  });

  return { keywordStats, shouldBeDisplayed };
}

export { generateStatTotals, generateKeywordTotals };
