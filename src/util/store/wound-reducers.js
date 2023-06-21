const initialState = {
  wounds: [] ,
};

const woundReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WOUNDS":
      return {
        ...state,
        wounds: action.payload,
      };
    case "ADD_WOUND":
      return {
        ...state,
        wounds: [...state.wounds, action.payload],
      };
    case "DELETE_WOUND":
      return {
        ...state,
        wounds: state.wounds.filter((wound) => wound.id !== action.payload),
      };
    default:
      return state;
  }
};

export default woundReducer;