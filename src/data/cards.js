const cards = [
  {name: "Strike", cost: 1, desc: "Deal 3 damage", damage: true, baseValue: 3, target: true},
  {name: "Block", cost: 1, desc: "Add 4 Shield to the Party", damage: false, baseValue: 4, target: false, shield: true},
  {name: "Valor", cost: 0, desc: "Heal the Party for 2 damage", damage: false, baseValue: 2, target: false, shield: false, heal: true},
  {name: "Assault", cost: 2, desc: "Deal 7 damage", damage: true, baseValue: 7, target: true, shield: false, heal: false},
  {name: "Disable", cost: 1, desc: "Weaken target for 2 rounds", damage: false, baseValue: 0, target: true, shield: false, heal: false, weaken: true, weakenAmount: 2},
  {name: "Bolster", cost: 2, desc: "Heal the Party for 2 damage, increase the Party's damage for 1 round", damage: false, baseValue: 2, target: false, shield: false, heal: true, weaken: false, weakenAmount: 0, strength: true, strengthAmount: 1, strengthDuration: 1},
  {name: "Protect", cost: 2, desc: "Add 9 Shield to the Party", damage: false, baseValue: 9, target: false, shield: true, heal: false, weaken: false, weakenAmount: 0, strength: false, strengthAmount: 0, strengthDuration: 0},
]

export default cards
