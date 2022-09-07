export const INITIAL_STATE = {
  movies: [],
  totalMovies: 0,
  page: 1,
  searchInput: '',
  error: false,
  errorMessage: '',
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        page: 1,
        searchInput: action.payload.value,
      };
    case 'CHANGE_PAGE':
      return { ...state, page: action.payload };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        movies: action.payload.Search,
        totalMovies: action.payload.totalResults,
        error: false,
        errorMessage: '',
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        movies: [],
        totalMovies: 0,
        page: 1,
        error: true,
        errorMessage: action.payload.Error,
      };
    case 'SET_ERROR_MESSAGE':
      console.log('setting error: ', action.payload);
      return {
        ...state,
        movies: [],
        totalMovies: 0,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
