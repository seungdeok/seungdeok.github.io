import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material';
import { routes } from '../configs/Routes';

export const SDAppBar = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
        >
          Seungdeok.
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {routes.map((item) => (
            <Link
              href={item.url}
              key={item.label}
              underline="none"
              sx={{ color: '#fff', p: 2 }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
