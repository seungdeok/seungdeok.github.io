import {
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from '@mui/material';

export interface ICard {
  label: string;
  description: string;
  githubURL: string;
  webURL: string;
}

export const SDCard = ({ label, description, githubURL, webURL }: ICard) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
          {label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          href={githubURL}
          sx={{ p: 2, visibility: githubURL ? 'visible' : 'hidden' }}
        >
          github
        </Link>
        <Link
          href={webURL}
          sx={{ p: 2, visibility: webURL ? 'visible' : 'hidden' }}
        >
          배포
        </Link>
      </CardActions>
    </Card>
  );
};
