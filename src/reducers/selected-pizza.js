// initially, no pizza is selected
const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PIZZA": {
      // the newly selected pizza
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default reducer