import MovieCard from './MovieCard';
import Grid from '@mui/material/Grid';

const Movies = ({ state }) => {
  return (
    <Grid container columns={{ xs: 4, sm: 6, md: 10 }} spacing={2}>
      {state.movies?.map((movie, index) => {
        return (
          <Grid
            key={index}
            item
            style={{ display: 'flex' }}
            xs={2}
            sm={2}
            md={2}
          >
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              year={movie.Year}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Movies;
