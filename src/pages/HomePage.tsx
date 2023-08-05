import * as React from 'react';
import { Box, Link, Typography, Container } from '@mui/material';
import { SDAppBar } from '../components/AppBar';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
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
            Material UI Create React App example in TypeScript
          </Typography>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
};
