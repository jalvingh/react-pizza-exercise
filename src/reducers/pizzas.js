const initialState = [
  {
    id: 1,
    name: "Pizza Margarita",
    description: "Minimalism is key!",
    ingredients: [
      "tomato",
      "mozarella",
      "basil"
    ]
  },
  {
    id: 2,
    name: "Pizza Napoletana",
    description: "Like Margarita, but without the basil.",
    ingredients: [
      "tomato",
      "mozarella"
    ]
  },
  {
    id: 3,
    name: "Pizza Bianca",
    description: "Did somebody say oil?",
    ingredients: [
      "olive oil",
      "salt",
      "rosemary"
    ]
  }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case  "ADD_PIZZA" : {
      const newpizza = {...action.payload, id: state.length + 1};
      // newpizza.id = state.length;
      return [...state, newpizza]
    }
    default: {
      return state;
    }
  }
}

export default reducer;