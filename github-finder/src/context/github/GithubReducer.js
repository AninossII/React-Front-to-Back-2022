const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload,
        repos: action.payload,
        isLoading: false,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    case 'SET_LOADING':
      return {
        isLoading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
