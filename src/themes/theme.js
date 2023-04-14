import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    text: {
      secondary: 'rgb(0 0 0 / 80%)'
    }
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    color: 'rgb(0 0 0 / 82%)'
  },
  primary: {
    main: 'hsl(163, 46%, 36%)',
    dark: 'hsl(163, 46%, 30%)',
    light: 'hsl(163, 46%, 42%)'
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          backgroundColor: 'hsl(163, 46%, 36%)',
          '&:hover': {
            backgroundColor: 'hsl(163, 46%, 26%)'
          }
        }
      }
    }
  }
})

export default theme
