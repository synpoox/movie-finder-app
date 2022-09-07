import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Pagination from '@mui/material/Pagination';
import Alert from '@mui/material/Alert';

const API = 'https://www.omdbapi.com/?apikey=e39d2990&type=movie&s=';

const Header = ({ state, dispatch }) => {
  const searchQuery = `${API + state.searchInput}&page=${state.page}`;

  const handleChange = (event) => {
    dispatch({ type: 'CHANGE_INPUT', payload: { value: event.target.value } });
  };
  const handlePageChange = (event, value) => {
    dispatch({ type: 'CHANGE_PAGE', payload: value });
  };

  useEffect(() => {
    let isSubscribed = true;
    if (state.searchInput.length <= 2 && state.searchInput.length > 0) {
      dispatch({
        type: 'SET_ERROR_MESSAGE',
        payload: 'Try searching for something more specific.',
      });
      return;
    }
    const getData = async () => {
      const response = await fetch(searchQuery);
      const data = await response.json();
      console.log(data);
      if (isSubscribed) {
        if (data.Response === 'False' && state.searchInput.length > 0) {
          dispatch({ type: 'SET_ERROR_MESSAGE', payload: data.Error });
          return;
        }
        try {
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch {
          dispatch({ type: 'FETCH_ERROR', payload: data });
        }
      }
    };
    getData();
    return () => (isSubscribed = false);
  }, [searchQuery, dispatch, state.searchInput.length]);

  return (
    <>
      <Typography variant="h2">Find the perfect movie.</Typography>
      <Box sx={{ width: '100%', margin: '1.5em' }}>
        <TextField
          variant="filled"
          placeholder="Search by title"
          onChange={handleChange}
          value={state.searchInput}
          hiddenLabel
          fullWidth
        />
      </Box>
      <Collapse in={state.error}>
        <Alert severity="error">{state.errorMessage}</Alert>
      </Collapse>
      {state.totalMovies > 10 && (
        <Pagination
          sx={{ paddingBottom: '1.5em' }}
          count={Math.ceil(state.totalMovies / 10)}
          onChange={handlePageChange}
          page={state.page}
          shape="rounded"
          variant="outlined"
        />
      )}
    </>
  );
};

export default Header;
