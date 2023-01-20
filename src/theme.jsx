import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#552cd6',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
