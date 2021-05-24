import NumberRange from 'functions/NumberRange'

const {
  descriptionTokens,
  duelsCardSets,
  keywordMinionExclusions
} = require('./filterConstants')

async function filterCardData(metadata, cardData, filter) {
  if (
    !metadata ||
    typeof metadata === 'string' ||
    !cardData ||
    typeof cardData === 'string' ||
    !filter
  ) {
    return null
  }

  let cards = cardData.cards

  // Filter by Card Set, but no need if it's wild.
  if (filter.cardSet && filter.cardSet !== 'wild') {
    let includedSets

    if (filter.cardSet === 'standard') {
      const setGroup = metadata.setGroups.find(
        (setGroup) => setGroup.slug === 'standard'
      )
      includedSets = setGroup.cardSets
    } else if (filter.cardSet === 'duels') {
      includedSets = duelsCardSets
    } else {
      includedSets = [filter.cardSet]
    }

    // put standard set ids in an array by index for quick lookup
    const includedSetIds = {}
    metadata.sets.forEach((set, i) => {
      if (includedSets.includes(set.slug)) {
        if (set.slug === 'classic-cards') {
          includedSetIds[3] = true
        } else {
          includedSetIds[set.id] = true
        }
      }
    })
    cards = cards.filter((card) => includedSetIds[card.cardSetId] === true)
  }

  // Filter by Card Type
  if (filter.cardType && metadata.types) {
    const selectedCardType = metadata.types.find(
      (cardType) => cardType.slug === filter.cardType
    )
    if (selectedCardType) {
      cards = cards.filter((card) => card.cardTypeId === selectedCardType.id)
    }
  }

  // Filter by Classes
  if (filter.classes && filter.classes.length > 0 && metadata.classes) {
    // put class ids in an array by index for quick lookup
    const selectedClassIds = []
    metadata.classes.forEach((_class) => {
      if (filter.classes.includes(_class.slug)) {
        selectedClassIds[_class.id] = true
      }
    })

    cards = cards.filter((card) => {
      if (card.multiClassIds) {
        for (let i = 0, l = card.multiClassIds.length; i < l; i++) {
          if (selectedClassIds[card.multiClassIds[i]]) return true
        }
      } else if (selectedClassIds[card.classId]) {
        return true
      }
      return false
    })
  }

  // Filter by Rarity
  if (filter.rarity && metadata.rarities) {
    const selectedRarity = metadata.rarities.find(
      (rarity) => rarity.slug === filter.rarity
    )
    if (selectedRarity) {
      cards = cards.filter((card) => card.rarityId === selectedRarity.id)
    }
  }

  // Filter by Minion Type
  if (
    filter.minionType &&
    metadata.minionTypes &&
    (!filter.cardType || filter.cardType === 'minion')
  ) {
    const selectedMinionType = metadata.minionTypes.find(
      (minionType) => minionType.slug === filter.minionType
    )
    if (selectedMinionType) {
      cards = cards.filter(
        (card) => card.minionTypeId === selectedMinionType.id
      )
    }
  }

  // Filter by Spell School
  if (
    filter.spellSchool &&
    metadata.spellSchools &&
    (!filter.cardType || filter.cardType === 'spellSchool')
  ) {
    const selectedSpellSchool = metadata.spellSchools.find(
      (spellSchool) => spellSchool.slug === filter.spellSchool
    )
    if (selectedSpellSchool) {
      cards = cards.filter(
        (card) => card.minionTypeId === selectedSpellSchool.id
      )
    }
  }

  // Filter by Keyword
  if (filter.keyword && metadata.keywords) {
    const selectedKeyword = metadata.keywords.find(
      (keyword) => keyword.slug === filter.keyword
    )
    if (selectedKeyword) {
      cards = cards.filter(
        (card) =>
          card.keywordIds && card.keywordIds.includes(selectedKeyword.id)
      )
    }
  }

  // Filter by Mana
  if (filter.manaCost) {
    const manaCostRange = new NumberRange(filter.manaCost)
    cards = cards.filter((card) => manaCostRange.includes(card.manaCost))
  }

  // Filter by Attack
  if (filter.attack) {
    const attackRange = new NumberRange(filter.attack)
    cards = cards.filter((card) => attackRange.includes(card.attack))
  }

  // Filter by Health
  if (filter.health) {
    const healthRange = new NumberRange(filter.health)
    cards = cards.filter((card) => healthRange.includes(card.health))
  }

  return cards
}

function generateFilterDescription(filter) {
  let filterDescription = 'All'

  const errorDescription = 'Error in URL. Reset page or try another URL.'

  // Classes
  if (filter.classes) {
    for (let i = 0, length = filter.classes.length; i < length; i++) {
      if (i > 0) {
        if (i === length - 1) {
          if (i === 1) filterDescription += ' and'
          else filterDescription += ', and'
        } else {
          filterDescription += ','
        }
      }
      const classToken = descriptionTokens.classes[filter.classes[i]]
      if (classToken) {
        filterDescription += classToken
      } else {
        return errorDescription
      }
    }
  }

  let isFirstNumeric = true

  // Mana Cost
  if (filter.manaCost) {
    if (isFirstNumeric) isFirstNumeric = false
    else filterDescription += ','
    filterDescription += ' ' + filter.manaCost + '-Cost'
  }

  // Health
  if (filter.health) {
    if (isFirstNumeric) isFirstNumeric = false
    else filterDescription += ','
    filterDescription += ' ' + filter.health + '-Health'
  }

  // Attack
  if (filter.attack) {
    if (isFirstNumeric) isFirstNumeric = false
    else filterDescription += ','
    filterDescription += ' ' + filter.attack + '-Attack'
  }

  // Rarity
  if (filter.rarity)
    filterDescription += descriptionTokens.rarity[filter.rarity]

  // Keyword
  if (filter.keyword)
    filterDescription += descriptionTokens.keyword[filter.keyword]

  // minion type / card type
  if (filter.minionType) {
    filterDescription += descriptionTokens.minionType[filter.minionType]
  } else if (filter.cardType) {
    filterDescription += descriptionTokens.cardType[filter.cardType]
  } else {
    filterDescription += descriptionTokens.cardType.default
  }

  // Card Set
  if (!filter.cardSet) {
    filterDescription += descriptionTokens.cardSet.wild
  } else {
    filterDescription += descriptionTokens.cardSet[filter.cardSet]
  }

  return filterDescription
}

export { filterCardData, generateFilterDescription }
