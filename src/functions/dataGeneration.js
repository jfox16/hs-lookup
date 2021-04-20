const { filterCards } = require("modules/hearthstone-card-filter");
const { generateStatTotals } = require("modules/hearthstone-card-stats");

const cardSetNames = {
  wild: "Wild",
  standard: "Standard",
  duels: "Duels",
};

const generateMarkupTable = (metadata, cardData, filters) => {
  let markupTable = "\n";

  if (!filters.cardSet) {
    markupTable += "# Wild\n";
  } else {
    markupTable += `# ${cardSetNames[filters.cardSet]}\n`;
  }

  markupTable += "Mana Cost|Avg. Attack|Avg. Health|Num. Minions\n";
  markupTable += ":--|:--|:--|:--\n";

  for (let manaCost = 0; manaCost <= 25; manaCost++) {
    const cards = filterCards(metadata, cardData, { ...filters, manaCost });
    if (cards.length > 0) {
      const totals = generateStatTotals(cards);
      markupTable += `${manaCost}|${totals.attack.mean.toFixed(
        1
      )}|${totals.health.mean.toFixed(1)}|${cards.length}\n`;
    }
  }

  return markupTable;
};

// Prints out tables in the form
export const generateTables = (cardData, metadata) => {
  if (cardData && cardData.cards && metadata && typeof metadata !== "string") {
    let tableString = "GENERATING TABLES";
    tableString +=
      "\n\n" + generateMarkupTable(metadata, cardData, { cardType: "minion" });
    tableString +=
      "\n\n" +
      generateMarkupTable(metadata, cardData, {
        cardType: "minion",
        cardSet: "standard",
      });
    tableString +=
      "\n\n" +
      generateMarkupTable(metadata, cardData, {
        cardType: "minion",
        cardSet: "duels",
      });
    console.log(tableString);
  } else return;
};
