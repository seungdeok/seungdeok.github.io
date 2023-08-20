import * as React from 'react';
import {
  Box,
  Link,
  Typography,
  Container,
  Stack,
  makeStyles,
  Grid,
} from '@mui/material';
import { SDAppBar } from '../components/AppBar';
import { SDCard } from '../components/Card';
import { cardItems } from '../configs/card';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://seungdeok.github.io/">
        seungdeok.github.io
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', paddingX: 2, paddingY: 12 }}>
      <SDAppBar />
      <Container maxWidth="lg">
        <Box component="main">
          <Typography variant="h4" component="h1" gutterBottom>
            Make, Share, Write
          </Typography>
          <Grid container columnSpacing={2} rowGap={2}>
            {cardItems.map((item) => {
              return (
                <Grid key={item.label} item xs={12} sm={6} minHeight={144}>
                  <SDCard
                    label={item.label}
                    description={item.description}
                    githubURL={item.githubURL}
                    webURL={item.webURL}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Box marginTop={4}>
            <Copyright />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
