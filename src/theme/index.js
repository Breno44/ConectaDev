import { createTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';

const theme = createTheme({
  palette: {
    primary: {
      dark: indigo['A700'],
      main: indigo['A400'],
      light: indigo['A200'],
    },
    secondary: {
      dark: orange['A700'],
      main: orange['A400'],
      light: orange['A200'],
    },
    typography: {
      h1: {
        fontWeight: 500,
        fontSize: 35,
        letterSpacing: '-0.24px',
      },
      h2: {
        fontWeight: 500,
        fontSize: 29,
        letterSpacing: '-0.24px',
      },
      h3: {
        fontWeight: 500,
        fontSize: 24,
        letterSpacing: '-0.06px',
      },
      h4: {
        fontWeight: 500,
        fontSize: 20,
        letterSpacing: '-0.06px',
      },
      h5: {
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: '-0.05px',
      },
      h6: {
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: '-0.05px',
      },
    },
  },
});

export default theme;
