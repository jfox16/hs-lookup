export const descriptionTokens = {
  classes: {
    demonhunter: ' Demon Hunter',
    druid: ' Druid',
    hunter: ' Hunter',
    mage: ' Mage',
    paladin: ' Paladin',
    priest: ' Priest',
    rogue: ' Rogue',
    shaman: ' Shaman',
    warlock: ' Warlock',
    warrior: ' Warrior',
    neutral: ' Neutral'
  },
  rarity: {
    free: ' Free',
    common: ' Common',
    rare: ' Rare',
    epic: ' Epic',
    legendary: ' Legendary'
  },
  cardType: {
    default: ' cards',
    hero: ' hero cards',
    minion: ' minions',
    spell: ' spells',
    weapon: ' weapons',
  },
  keyword: {
    taunt: ' Taunt',
    spellpower: ' Spell Damage',
    'divine-shield': ' Divine Shield',
    charge: ' Charge',
    stealth: ' Stealth',
    battlecry: ' Battlecry',
    windfury: ' Windfury',
    deathrattle: ' Deathrattle',
    combo: ' Combo',
    overload: ' Overload',
    inspire: ' Inspire',
    quest: ' Quest',
    poisonous: ' Poisonous',
    lifesteal: ' Lifesteal',
    echo: ' Echo',
    rush: ' Rush',
    overkill: ' Overkill',
    modular: ' Magnetic',
    twinspell: ' Twinspell',
    reborn: ' Reborn',
    outcast: ' Outcast',
    spellburst: ' Spellburst',
  },
  minionType: {
    murloc: ' Murlocs',
    demon: ' Demons',
    mech: ' Mechs',
    elemental: ' Elementals',
    beast: ' Beasts',
    totem: ' Totems',
    pirate: ' Pirates',
    dragon: ' Dragons',
    all: "'All'-type minions",
  },
  isStandard: {
    false: ' in Wild',
    true: ' in Standard'
  }
};

export const keywordMinionExclusions = {
  taunt: {
    // 1-cost
    50796: true,
    // 2-cost
    42651: true,
    47416: true,
    2596: true,
    891: true,
    38538: true,
    50410: true,
    // 3-cost
    46859: true,
    47614: true,
    50315: true,
    43473: true,
    // 4-cost
    58202: true,
    40973: true,
    43022: true,
    1003: true,
    50514: true,
    43133: true,
    763: true,
    2075: true,
    2569: true,
    39491: true,
    41241: true,
    46102: true,
    45342: true,
    58973: true,
    // 5-cost
    692: true,
    39489: true,
    40700: true,
    41305: true,
    43485: true,
    54153: true,
    59918: true,
    // 6-cost
    54894: true,
    48100: true,
    640: true,
    1656: true,
    2507: true,
    48226: true,
    // 7-cost
    1035: true,
    40422: true,
    41116: true,
    2881: true,
    38944: true,
    46988: true,
    54148: true,
    53489: true,
    // 8-cost
    60280: true,
    2945: true,
    42790: true,
    // 9-cost
    36: true,
    43439: true,
  },
  spellpower: {
    // 1-cost
    57184: true,
    // 2-cost
    49263: true,
    42775: true,
    50083: true,
    52289: true,
    56391: true,
    // 3-cost
    52654: true,
    // 4-cost
    2549: true,
    915: true,
    // 5-cost
    58770: true,
    52415: true,
    59216: true,
    // 6-cost
    59576: true,
  },
  'divine-shield': {
    // 1-cost
    38740: true,
    57182: true,
    // 2-cost
    1022: true,
    47416: true,
    // 3-cost
    38911: true,
    42948: true,
    755: true,
    2748: true,
    43473: true,
    // 4-cost
    2075: true,
    41241: true,
    46102: true,
    // 5-cost
    2030: true,
    56438: true,
    // 6-cost
    2507: true,
    48226: true,
    // 7-cost
    40295: true,
    54148: true,
  },
  charge: {
    // 1-cost
    724: true,
    // 2-cost
    2783: true,
    2758: true,
    // 3-cost
    1009: true,
    // 4-cost
    2627: true,
    40611: true,
    // 5-cost
    692: true,
    699: true,
    40700: true,
    // 6-cost
    40613: true,
  },
  stealth: {
    // 2-cost
    2783: true,
    1990: true,
    56378: true,
    // 3-cost
    56527: true,
    // 4-cost
    40973: true,
    887: true,
    40695: true,
    49233: true,
    57177: true,
    // 5-cost
    40928: true,
    // 6-cost
    55424: true,
    // 7-cost
    56379: true,
  },
  battlecry: {
    // 2-cost
    1800: true,
    // 3-cost
    2949: true,
    40294: true,
    // 4-cost
    2888: true,
    2518: true,
    // spells
    56094: true,
  },
  windfury: {
    // 3-cost
    1155: true,
    2533: true,
    // 4-cost
    178: true,
    2075: true,
    46102: true,
    // 7-cost
    54148: true,
    // 8-cost
    52902: true,
    // spells
    51: true,
  },
  deathrattle: {
    // 1-cost
    1910: true,
    // 2-cost
    47855: true,
    2878: true,
    51567: true,
    // 3-cost
    41304: true,
    2069: true,
    2891: true,
    2065: true,
    // 4-cost
    47856: true,
    1915: true,
    41289: true,
    56824: true,
    56694: true,
    // 5-cost
    42615: true,
    38910: true,
    42822: true,
    49416: true,
    48159: true,
    50775: true,
    54020: true,
    55099: true,
    42909: true,
    42781: true,
    55454: true,
    59658: true,
    // 6-cost
    46445: true,
    40745: true,
    // 7-cost
    47131: true,
    50443: true,
    38496: true,
    // spells
    58782: true,
    56555: true,
    404: true,
    52468: true,
    52082: true,
    381: true,
    54873: true,
    56412: true,
  },
  combo: {
    // 2-cost
    53627: true,
    // 4-cost
    58975: true,
    // 6-cost
    47071: true,
  },
  overload: {
    // 1-cost
    2890: true,
    54966: true,
    // 2-cost
    2289: true,
    38265: true,
    50550: true,
    // 3-cost
    774: true,
    // 4-cost
    48527: true,
    53990: true,
    // 5-cost
    55021: true,
    // 6-cost
    59542: true,
    // 7-cost
    43331: true,
    // 11-cost lul
    42765: true,
  },
  quest: {
    // 2-cost
    53947: true,
    56120: true,
    // 4-cost
    56307: true,
  },
  poisonous: {
    // 1-cost
    52277: true,
    // 2-cost
    42651: true,
    // 3-cost
    60004: true,
    43028: true,
    47607: true,
    // 4-cost
    47256: true,
    54863: true,
    49361: true,
    // 5-cost
    48902: true,
    // spells
    54426: true,
    42648: true,
    42525: true,
    56524: true,
    41834: true,
    42649: true,
    // heroes
    43417: true,
  },
  lifesteal: {
    // 2-cost
    56632: true,
    49175: true,
    // 3-cost
    47614: true,
    // 4-cost
    46102: true,
    43029: true,
    45342: true,
    // 5-cost
    47085: true,
    // 7-cost
    47131: true,
    // 8-cost
    56516: true,
    // spells
    42665: true,
    52810: true,
    52490: true,
    54892: true,
    56623: true,
    // heroes
    43419: true,
    43406: true,
  },
  echo: {
    // 4-cost
    46908: true,
    // 6-cost
    47295: true,
  },
  rush: {
    // 1-cost
    47133: true,
    52242: true,
    57183: true,
    // 2-cost
    58495: true,
    52603: true,
    49170: true,
    54411: true,
    // 3-cost
    46859: true,
    56734: true,
    59101: true,
    53173: true,
    55404: true,
    // 4-cost
    47488: true,
    49361: true,
    48527: true,
    47241: true,
    52707: true,
    55408: true,
    56307: true,
    // 5-cost
    50659: true,
    // 6-cost
    55024: true,
    52486: true,
    // 7-cost
    59727: true,
    47131: true,
    54148: true,
    // 8-cost
    52873: true,
    // 10-cost
    52086: true,
    // spells
    55288: true,
    49052: true,
    58978: true,
    48770: true,
    47925: true,
    56792: true,
    56841: true,
    59542: true,
    52089: true,
    54424: true,
    59539: true,
    47928: true,
    // weapons
    47511: true,
    52860: true,
    // heroes
    57427: true,
    48146: true,
  },
  modular: {
    // spells
    49009: true,
  },
  reborn: {
    // 1-cost
    54261: true,
    // 4-cost
    53935: true,
    // 5-cost
    54284: true,
    // spells
    53907: true,
    53932: true,
  },
  outcast: {
    // spells
    59606: true,
  },

}