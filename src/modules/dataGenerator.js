const { filterCards } = require('./hearthstone-card-filter');
const { generateStatTotals } = require('./hearthstone-card-stats');

export const generateMarkupTable = (metadata, cardData, filters) => {
  let markupTable = '\n'
  markupTable += (filters.isStandard) ? '# Standard\n' : '# Wild\n';
  markupTable += 'Mana Cost|Avg. Attack|Avg. Health|Num. Minions\n';
  markupTable += ':--|:--|:--|:--\n';

  for (let manaCost = 0; manaCost <= 25; manaCost++) {
    const cards = filterCards(metadata, cardData, {...filters, manaCost});
    if (cards.length > 0) {
      const totals = generateStatTotals(cards);
      markupTable += `${manaCost}|${totals.attack.mean.toFixed(2)}|${totals.health.mean.toFixed(2)}|${cards.length}\n`;
    }
  }

  return markupTable;
}