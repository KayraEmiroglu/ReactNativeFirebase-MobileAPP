const initialState = {
    user: null,
    isLoggedIn: false,
    profilePhoto: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isLoggedIn: false,
        };
        case 'UPDATE_PHOTO':
          return {
            ...state,
            profilePhoto: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default userReducer;