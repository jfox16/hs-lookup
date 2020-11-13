
const {
  descriptionTokens,
  duelsCardSets,
  keywordMinionExclusions
} = require('./filterConstants');



function filterCards(metadata, cardData, filters) {

  if (!metadata || typeof metadata === 'string' 
    || !cardData || typeof cardData === 'string' 
    || !filters) 
  {
    return null;
  }

  console.log('filtering with: ', filters);

  let cards = cardData.cards;

  // Filter by Format
  if (filters.format) {

    let includedSets;

    if (filters.format === 'standard') {
      const setGroup = metadata.setGroups.find(setGroup => setGroup.slug === 'standard');
      includedSets = setGroup.cardSets;
    }
    else if (filters.format === 'duels') {
      includedSets = duelsCardSets;
    }

    // put standard set ids in an array by index for quick lookup
    const includedSetIds = {};
    metadata.sets.forEach((set) => {
      if (includedSets.includes(set.slug)) {
        includedSetIds[set.id] = true;
      }
    });

    cards = cards.filter(card => includedSetIds[card.cardSetId] === true);
  }

  // Filter by Card Type
  if (filters.cardType && metadata.types) {
    const selectedCardType = metadata.types.find(cardType => cardType.slug === filters.cardType);
    if (selectedCardType) {
      cards = cards.filter(card => card.cardTypeId === selectedCardType.id);
    }
  }

  // Filter by Classes
  if (filters.classes && filters.classes.length > 0 && metadata.classes) {
    // put class ids in an array by index for quick lookup
    const selectedClassIds = [];
    metadata.classes.forEach(_class => {
      if (filters.classes.includes(_class.slug)) {
        selectedClassIds[_class.id] = true;
      }
    });

    cards = cards.filter(card => {
      if (selectedClassIds[card.classId]) return true;
      if (card.multiClassIds) {
        for (let i = 0, l = card.multiClassIds.length; i < l; i++) {
          if (selectedClassIds[card.multiClassIds[i]]) return true;
        }
      }
      return false;
    });
  }

  // Filter by Rarity
  if (filters.rarity && metadata.rarities) {
    const selectedRarity = metadata.rarities.find(rarity => rarity.slug === filters.rarity);
    if (selectedRarity) {
      cards = cards.filter(card => card.rarityId === selectedRarity.id);
    }
  }

  // Filter by Minion Type
  if (filters.minionType && metadata.minionTypes && (!filters.cardType || filters.cardType === 'minion')) {
    const selectedMinionType = metadata.minionTypes.find(minionType => minionType.slug === filters.minionType);
    if (selectedMinionType) {
      cards = cards.filter(card => card.minionTypeId === selectedMinionType.id);
    }
  }

  // Filter by Keyword
  if (filters.keyword && metadata.keywords) {
    const selectedKeyword = metadata.keywords.find(keyword => keyword.slug === filters.keyword);
    if (selectedKeyword) {
      cards = cards.filter(card => (
        card.keywordIds
        && card.keywordIds.includes(selectedKeyword.id)
        && !(keywordMinionExclusions[selectedKeyword.slug] && keywordMinionExclusions[selectedKeyword.slug][card.id])
      ));
    }
  }

  // Filter by Mana
  if (filters.manaCost !== '' && !isNaN(filters.manaCost)) {
    cards = cards.filter(card => card.manaCost === Number(filters.manaCost));
  }

  // Filter by Attack
  if (filters.attack !== '' && !isNaN(filters.attack)) {
    cards = cards.filter(card => card.attack === Number(filters.attack));
  }

  // Filter by Health
  if (filters.health !== '' && !isNaN(filters.health)) {
    cards = cards.filter(card => card.health === Number(filters.health));
  }

  return cards;
}



function generateFilterDescription(filters) {

  let filterDescription = 'Showing all';

  // Classes
  if (filters.classes) {
    for (let i = 0, length = filters.classes.length; i < length; i++) {
      if (i > 0) {
        if (i === length-1) {
          if (i === 1) filterDescription += ' and';
          else filterDescription += ', and';
        }
        else {
          filterDescription += ',';
        }
      }
      filterDescription += descriptionTokens.classes[filters.classes[i]];
    }
  }

  let isFirstNumeric = true;

  // Mana Cost
  if (filters.manaCost && !isNaN(filters.manaCost)) {
    if (isFirstNumeric) isFirstNumeric = false;
    else filterDescription += ',';
    filterDescription += ' ' + filters.manaCost + '-Cost';
  }
  
  // Health
  if (filters.health && !isNaN(filters.health)) {
    if (isFirstNumeric) isFirstNumeric = false;
    else filterDescription += ',';
    filterDescription += ' ' + filters.health + '-Health';
  }

  // Attack
  if (filters.attack && !isNaN(filters.attack)) {
    if (isFirstNumeric) isFirstNumeric = false;
    else filterDescription += ',';
    filterDescription += ' ' + filters.attack + '-Attack'
  }

  // Rarity
  if (filters.rarity) filterDescription += descriptionTokens.rarity[filters.rarity];

  // Keyword
  if (filters.keyword) filterDescription += descriptionTokens.keyword[filters.keyword];

  // minion type / card type
  if (filters.minionType) {
    filterDescription += descriptionTokens.minionType[filters.minionType];
  }
  else if (filters.cardType) {
    filterDescription += descriptionTokens.cardType[filters.cardType];
  }
  else {
    filterDescription += descriptionTokens.cardType.default;
  }

  // Format
  if (!filters.format) {
    filterDescription += descriptionTokens.format.wild;
  }
  else {
    filterDescription += descriptionTokens.format[filters.format];
  }

  return filterDescription;
}



export { filterCards, generateFilterDescription };