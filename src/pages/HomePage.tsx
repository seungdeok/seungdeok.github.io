import * as React from 'react';
import { Box, Link, Typography, Container } from '@mui/material';
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
    <Box sx={{ display: 'flex', p: 12 }}>
      <SDAppBar />
      <Container maxWidth="lg">
        <Box component="main">
          <Typography variant="h4" component="h1" gutterBottom>
            Make, Share, Write
          </Typography>
          {cardItems.map((item) => {
            return (
              <SDCard
                key={item.label}
                label={item.label}
                description={item.description}
                githubURL={item.githubURL}
                webURL={item.webURL}
              />
            );
          })}
          <Box marginTop={4}>
            <Copyright />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
