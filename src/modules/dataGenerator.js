const { filterCards } = require('./hearthstone-card-filter');
const { generateStatTotals } = require('./hearthstone-card-stats');

const formatNames = {
  'wild': 'Wild',
  'standard': 'Standard',
  'duels': 'Duels'
}

export const generateMarkupTable = (metadata, cardData, filters) => {
  let markupTable = '\n'

  if (!filters.format) {
    markupTable += '# Wild\n'
  }
  else {
    markupTable += `# ${formatNames[filters.format]}\n`
  }

  markupTable += 'Mana Cost|Avg. Attack|Avg. Health|Num. Minions\n';
  markupTable += ':--|:--|:--|:--\n';

  for (let manaCost = 0; manaCost <= 25; manaCost++) {
    const cards = filterCards(metadata, cardData, {...filters, manaCost});
    if (cards.length > 0) {
      const totals = generateStatTotals(cards);
      markupTable += `${manaCost}|${totals.attack.mean.toFixed(1)}|${totals.health.mean.toFixed(1)}|${cards.length}\n`;
    }
  }

  return markupTable;
}