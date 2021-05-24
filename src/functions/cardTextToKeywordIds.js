import { descriptionTokens } from 'modules/filterConstants'

const colonKeywords = [
  'Battlecry',
  'Combo',
  'Corrupt',
  'Deathrattle',
  'Frenzy',
  'Inspire',
  'Outcast',
  'Overkill',
  'Overload',
  'Spellburst',
  'Quest'
]

function cardTextToKeywordIds(cardText, metadata) {
  const keywordIdsSet = new Set()

  const slugIds = {}
  metadata.keywords.forEach((keyword) => {
    slugIds[keyword.slug] = keyword.id
  })

  const slugs = Object.keys(descriptionTokens.keyword)
  const nameIds = {}
  slugs.forEach((slug) => {
    const name = descriptionTokens.keyword[slug].replaceAll(' ', '')
    nameIds[name] = slugIds[slug]
  })

  let cleanCardText = cardText
  cleanCardText = cleanCardText.replace(/<\/*.>/g, '')

  colonKeywords.forEach((keyword) => {
    if (cleanCardText.includes(keyword + ':')) {
      keywordIdsSet.add(nameIds[keyword])
    }
  })

  if (cleanCardText.includes('Charrrrrge')) {
    keywordIdsSet.add(nameIds['Charge'])
  }

  cleanCardText = cleanCardText.replace(/[,\.]/g, '')
  cleanCardText = cleanCardText.replace('and', '')
  cleanCardText = cleanCardText.replace('Divine Shield', 'DivineShield')
  cleanCardText = cleanCardText.replace('Spell Damage', 'SpellDamage')

  const words = cleanCardText.split(' ')
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (nameIds[word] !== undefined) {
      keywordIdsSet.add(nameIds[word])
    } else {
      break
    }
  }

  return Array.from(keywordIdsSet)
}

export default cardTextToKeywordIds
