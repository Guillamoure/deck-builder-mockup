const initialCharacters = {
  characters: [
    {
      name: "The Hero",
      cards: ["Strike", "Strike", "Block", "Valor"]
    },
    {
      name: "The Mercenary",
      cards: ["Strike", "Strike", "Assault", "Disable"]
    },
    {
      name: "The Guard",
      cards: ["Block", "Block", "Bolster", "Protect"]
    },
    {
      name: "The Apprentice",
      cards: ["Charm", "Evoke", "Decieve", "Singe"]
    },
    {
      name: "The Squire",
      cards: ["Parry", "Encourage", "Protect", "Jab"]
    },
    {
      name: "The Pickpocket",
      cards: ["Nab", "Bargain", "Flee", "Plan"]
    },
  ]
}

const reducer = (state = initialCharacters, action) => {
  switch(action.type){
    default:
      return state
  }
}

export default reducer
