const actionStyles = (style, difficulty = 1, modifier = 0) => {
  switch(style){
    case "primarily attack, rally":
      return [
        {title: "Attack", value: ((2 + modifier) * difficulty)},
        {title: "Attack", value: ((2 + modifier) * difficulty)},
        {title: "Strengthen", value: 1},
      ]
    default:
      return [{title: "Attack", value: ((3 + modifier) * difficulty)}]
  }
}

export default actionStyles
