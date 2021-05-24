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
    weapon: ' weapons'
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
    corrupt: ' Corrupt',
    frenzy: ' Frenzy'
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
    all: " 'All'-type minions"
  },
  spellSchool: {
    shadow: ' Shadow',
    nature: ' Nature',
    holy: ' Holy',
    frost: ' Frost',
    fire: ' Fire',
    fel: ' Fel',
    arcane: ' Arcane'
  },
  cardSet: {
    wild: ' in Wild',
    standard: ' in Standard',
    duels: ' in Duels',
    legacy: ' in the Legacy Set',
    'forged-in-the-barrens': ' in Forged in the Barrens',
    'classic-cards': ' in Classic Cards',
    core: ' in the Core Set',
    'madness-at-the-darkmoon-faire': ' in Madness at the Darkmoon Faire',
    'scholomance-academy': ' in Scholomance Academy',
    'demonhunter-initiate': ' in Demon Hunter Initiate',
    'ashes-of-outland': ' in Ashes of Outland',
    'galakronds-awakening': ' in Galakrond’s Awakening',
    'descent-of-dragons': ' in Descent of Dragons',
    'saviors-of-uldum': ' in Saviors of Uldum',
    'rise-of-shadows': ' in Rise of Shadows',
    'rastakhans-rumble': ' in Rastakhan’s Rumble',
    'the-boomsday-project': ' in The Boomsday Project',
    'the-witchwood': ' in The Witchwood',
    'kobolds-and-catacombs': ' in Kobolds and Catacombs',
    'knights-of-the-frozen-throne': ' in Knights of the Frozen Throne',
    'journey-to-ungoro': ' in Journey to Un’Goro',
    'mean-streets-of-gadgetzan': ' in Mean Streets of Gadgetzan',
    'one-night-in-karazhan': ' in One Night in Karazhan',
    'whispers-of-the-old-gods': ' in Whispers of the Old Gods',
    'league-of-explorers': ' in League of Explorers',
    'the-grand-tournament': ' in The Grand Tournament',
    'blackrock-mountain': ' in Blackrock Mountain',
    'goblins-vs-gnomes': ' in Goblins vs Gnomes',
    naxxramas: ' in Curse of Naxxramas'
  }
}

export const duelsCardSets = [
  'core',
  'classic-cards',
  'legacy',
  'forged-in-the-barrens',
  'madness-at-the-darkmoon-faire',
  'scholomance-academy',
  'journey-to-ungoro',
  'one-night-in-karazhan',
  'whispers-of-the-old-gods',
  'naxxramas'
]

export const keywordMinionExclusions = {
  battlecry: {
    // 2-cost
    1800: true,
    // 3-cost
    2949: true,
    40294: true,
    62888: true,
    // 4-cost
    2888: true,
    2518: true,
    // spells
    48393: true,
    54369: true,
    56094: true
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
    // spells
    344: true,
    1243: true
  },
  combo: {
    // 2-cost
    53627: true,
    /// 3-cost
    62888: true,
    // 4-cost
    58975: true,
    // 6-cost
    47071: true
  },
  corrupt: {
    61945: true
  },
  dormant: {},
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
    61950: true,
    63381: true,
    // 4-cost
    47856: true,
    1915: true,
    41289: true,
    56824: true,
    56694: true,
    69714: true,
    63166: true,
    69591: true,
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
    63167: true,
    // spells
    38393: true,
    38329: true,
    58782: true,
    56555: true,
    404: true,
    52468: true,
    52082: true,
    381: true,
    54873: true,
    56412: true,
    61690: true
  },
  'divine-shield': {
    // 1-cost
    38740: true,
    57182: true,
    // 2-cost
    1022: true,
    47416: true,
    69611: true,
    // 3-cost
    38911: true,
    42948: true,
    755: true,
    2748: true,
    43473: true,
    61948: true,
    62706: true,
    69724: true,
    // 4-cost
    2075: true,
    41241: true,
    46102: true,
    61186: true,
    // 5-cost
    2030: true,
    56438: true,
    61191: true,
    // 6-cost
    2507: true,
    48226: true,
    // 7-cost
    40295: true,
    54148: true,
    // 8-cost
    61192: true,
    // spells
    727: true,
    2717: true,
    48984: true,
    55069: true,
    43373: true,
    53827: true,
    56554: true,
    59409: true,
    54834: true,
    // weapons
    2027: true,
    38745: true,
    58791: true,
    59602: true
  },
  echo: {
    // 4-cost
    46908: true,
    // 6-cost
    47295: true
  },
  lifesteal: {
    // 2-cost
    56632: true,
    49175: true,
    // 3-cost
    47614: true,
    61203: true,
    63165: true,
    // 4-cost
    46102: true,
    43029: true,
    45342: true,
    62933: true,
    // 5-cost
    47085: true,
    // 7-cost
    47131: true,
    // 8-cost
    56516: true,
    61192: true,
    // spells
    42665: true,
    52810: true,
    52490: true,
    54892: true,
    56623: true,
    // heroes
    43419: true,
    43406: true
  },
  modular: {
    // spells
    49009: true
  },
  outcast: {
    // 1-cost
    61939: true,
    // 2-cost
    61128: true,
    // 3-cost
    61123: true,
    // spells
    59606: true
  },
  overload: {
    // 1-cost
    2890: true,
    54966: true,
    61962: true,
    // 2-cost
    2289: true,
    38265: true,
    50550: true,
    61961: true,
    // 3-cost
    774: true,
    69628: true,
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
    42765: true
  },
  poisonous: {
    // 1-cost
    52277: true,
    // 2-cost
    42651: true,
    61679: true,
    // 3-cost
    60004: true,
    43028: true,
    47607: true,
    69708: true,
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
    43417: true
  },
  quest: {
    // 2-cost
    53947: true,
    56120: true,
    // 4-cost
    56307: true
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
    53932: true
  },
  rush: {
    // 1-cost
    47133: true,
    52242: true,
    57183: true,
    63195: true,
    // 2-cost
    58495: true,
    52603: true,
    49170: true,
    54411: true,
    61262: true,
    61235: true,
    63007: true,
    62484: true,
    63002: true,
    // 3-cost
    46859: true,
    56734: true,
    59101: true,
    53173: true,
    55404: true,
    61639: true,
    63072: true,
    1009: true,
    62481: true,
    69504: true,
    69549: true,
    // 4-cost
    47488: true,
    49361: true,
    48527: true,
    47241: true,
    52707: true,
    55408: true,
    56307: true,
    // 5-cost
    692: true,
    50659: true,
    60892: true,
    69595: true,
    // 6-cost
    55024: true,
    52486: true,
    // 7-cost
    59727: true,
    47131: true,
    54148: true,
    // 8-cost
    52873: true,
    61192: true,
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
    61249: true,
    61130: true,
    // weapons
    47511: true,
    52860: true,
    53860: true,
    // heroes
    57427: true,
    48146: true
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
    62485: true,
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
    // spells
    2572: true,
    59213: true,
    59639: true,
    39694: true,
    58790: true,
    48803: true
  },
  taunt: {
    // 1-cost
    50796: true,
    63323: true,
    // 2-cost
    42651: true,
    47416: true,
    2596: true,
    891: true,
    38538: true,
    50410: true,
    63130: true,
    63114: true,
    63033: true,
    63021: true,
    69511: true,
    // 3-cost
    46859: true,
    47614: true,
    50315: true,
    43473: true,
    69626: true,
    69724: true,
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
    61129: true,
    61943: true,
    63042: true,
    69663: true,
    // 5-cost
    692: true,
    39489: true,
    40700: true,
    41305: true,
    43485: true,
    54153: true,
    59918: true,
    61581: true,
    62581: true,
    63279: true,
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
    53439: true,
    63038: true,
    // 8-cost
    60280: true,
    2945: true,
    42790: true,
    61192: true,
    // 9-cost
    36: true,
    43439: true,
    // spells
    149: true,
    55039: true,
    1084: true,
    40839: true,
    41427: true,
    53796: true,
    213: true,
    56684: true,
    2641: true,
    43382: true,
    55342: true,
    56086: true,
    2754: true,
    40566: true,
    59410: true,
    151: true,
    238: true,
    39495: true,
    61263: true,
    56678: true,
    766: true,
    54967: true,
    2009: true,
    42656: true,
    53576: true,
    41864: true,
    45877: true,
    53827: true,
    50547: true,
    60164: true,
    50019: true,
    59602: true,
    54833: true,
    56554: true,
    56292: true,
    // weapons
    2027: true,
    59408: true,
    2756: true,
    61189: true,
    // heroes
    43417: true
  },
  stealth: {
    // 2-cost
    2783: true,
    1990: true,
    56378: true,
    61168: true,

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
    // spells
    990: true,
    896: true,
    39160: true,
    61156: true,
    61154: true,
    // heroes
    43392: true
  },
  windfury: {
    // 3-cost
    1155: true,
    2533: true,
    63072: true,
    // 4-cost
    178: true,
    2075: true,
    46102: true,
    // 5-cost
    61230: true,
    // 7-cost
    54148: true,
    // 8-cost
    52902: true,
    // spells
    51: true
  },
  frenzy: {
    63274: true
  }
}
