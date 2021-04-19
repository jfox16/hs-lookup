# HSLookup.net

## [👉Try it here!💻](https://hslookup.net)

HSLookup is a website made in React to look up Hearthstone cards and generate useful statistics.

![](hslookup-demo.gif)

## What is this?

If you play Hearthstone, you've probably seen effects that randomly generate minions like [Boggspine Knuckles](https://d15f34w2p8l1cc.cloudfront.net/hearthstone/42fc482dcb41ed6d04cebe1f0608f1e247b0c1f321b6e59d9d7ca3c4c4ab724a.png), [First Day of School](https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d6f40a13714f5404a88bbaf83c34dc356f028631e8b034d97f7f7b85dbd87801.png), or [Dragonqueen Alexstraza](https://d15f34w2p8l1cc.cloudfront.net/hearthstone/9bdf51419bedabfda3247adc02e306b20ad641603e19ff9e68cda9d79ca72fb9.png). You've probably also wondered what the average stats/cost of those minions would be, and how likely they are to have effects like Taunt or Rush.

Wouldn't it be cool if there was a way to just look at all the minions in the game and find their average stats? There is! That's exactly what HSLookup does!

## How do I use it?

1. Go to [HSLookup.net](https://hslookup.net).
2. Input the kind of cards you're looking for in the filter form. You can specify between Wild, Standard, and Duels formats at the top. For numeric values (Mana, Attack, Health), you can use a comma-separated list of numbers. (e.g. "3,4,5"). You can select more than one class.
3. The graphs will show frequencies of mana/attack/health values, and the statistics for each value. Below that, it shows the probability that a card would have each specified keyword. And below that you can see the full list of cards that fit your criteria.

## How does it work?

I pull the list of cards from the Blizzard Hearthstone API every time there's an expansion or other change to update my card values. When you input a filter, it looks for any matching cards and uses their data to generate statistics and keyword percentages. The stats do not incorporate any card effects.

Special note about keywords: Cards only count as having a keyword if it inherently has that keyword without other effects. For example, if you search for minions with Lifesteal, [Judicious Junior](https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3233e0228d62c15562eaf726ecf1ecda1fda4b60d4793dc279c3b04774d3e834.png) would be counted, while [High Exarch Yrel](https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b77dc45899fdc7d2f18ce02b1dc3a9d191354f3b7eea825b63b2487f3811e386.png) would not.

## Technology Used

- **Front End**: React, JavaScript, CSS
- **Back End**: Heroku, Node, Express
- **Database**: Postgres
