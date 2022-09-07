import { useReducer } from 'react';
import Movies from './components/Movies';
import Header from './components/Header';
import Container from '@mui/material/Container';
import { movieReducer, INITIAL_STATE } from './components/movieReducer';

function App() {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE);

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header state={state} dispatch={dispatch} />
      <Movies state={state} />
    </Container>
  );
}

export default App;
