import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MovieCard = ({ title, poster, year }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia
        component="img"
        image={poster !== 'N/A' ? poster : 'http://via.placeholder.com/360x540'}
      />
      <CardContent>
        <Typography variant="subtitle2">
          {title} ({year})
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ width: 1 }} variant="outlined" size="small">
          RENT
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
