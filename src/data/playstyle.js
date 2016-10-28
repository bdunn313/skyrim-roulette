export default [
  {
    title: 'Wizard',
    skills: [['Destruction', 'Restoration', 'Alteration']],
    restrictions: ['Light Armor', 'Heavy Armor'],
    craft: 'Enchanting'
  },
  {
    title: 'Knight',
    skills: [
      ['Heavy Armor', 'One-Handed Weapons', 'Blocking'],
      ['Heavy Armor', 'Two-Handed Weapons', 'Archery']
    ],
    restrictions: ['Magic'],
    craft: 'Smithing'
  },
  {
    title: 'Ranger',
    skills: [['Light Armor', 'One-Handed Weapons', 'Archery']],
    restrictions: ['Heavy Armor'],
    craft: 'Smithing'
  },
  {
    title: 'Barbarian',
    skills: [
      ['Two-Handed Weapons', 'Light Armor', 'Archery'],
      ['One-Handed Weapons (Dual Wielding)', 'Light Armor', 'Archery']
    ],
    restrictions: ['Magic', 'Heavy Armor'],
    craft: 'Alchemy'
  },
  {
    title: 'Spellsword',
    skills: [
      ['Conjuration', 'One-Handed Weapons', 'Destruction'],
      ['Conjuration', 'Two-Handed Weapons', 'Destruction']
    ],
    restrictions: ['Non-Conjured Weapons'],
    craft: 'Enchanting'
  },
  {
    title: 'Shaman',
    skills: [['Restoration', 'One-Handed Weapons', 'Destruction']],
    restructions: ['Heavy Armor'],
    craft: 'Alchemy'
  },
  {
    title: 'Necromancer/Warlock',
    skills: [['Conjuration', 'Destruction', 'Alteration']],
    restrictions: ['Restoration'],
    craft: 'Alchemy'
  },
  {
    title: 'Assassin',
    skills: [
      ['Sneak', 'Illusion', 'One-Handed Weapons'],
      ['Sneak', 'Illusion', 'Archery']
    ],
    restrictions: ['Heavy Armor'],
    craft: 'Enchanting'
  },
  {
    title: 'Paladin',
    skills: [
      ['Heavy Armor', 'Restoration', 'One-Handed Weapons'],
      ['Heavy Armor', 'Restoration', 'Two-Handed Weapons']
    ],
    restrictions: ['Conjuration', 'Alteration', 'Destruction', 'Illusion'],
    craft: 'Smithing'
  },
  {
    title: 'Bard',
    skills: [['Illusion', 'Restoration', 'One-Handed Weapons']],
    restrictions: ['Destruction'],
    craft: 'Enchanting'
  }
]
