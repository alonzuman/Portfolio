import { createMuiTheme } from "@material-ui/core";

const base = {
  palette: {
    primary: {
      dark: '#3a0013',
      main: '#ff548e',
      light: '#ff7eaa'
    }
  },

  shadows: [
    'none',
    'rgb(0 0 0 / 8%) 0px 1px 12px',
    'rgb(0 0 0 / 8%) 0px 1px 12px',
    'rgb(0 0 0 / 8%) 0px 1px 12px',
    'rgb(0 0 0 / 8%) 0px 1px 12px',
    'rgb(0 0 0 / 8%) 0px 1px 12px',
    'rgb(0 0 0 / 8%) 0px 1px 12px',
    'rgb(0 0 0 / 8%) 0px 1px 12px',
  ],

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920
    }
  },

  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600
    },

    h2: {
      fontSize: '1.4rem',
      fontWeight: 600
    },

    h3: {
      fontSize: '1.2rem',
      fontWeight: 700
    },

    h4: {
      fontSize: '1rem',
      fontWeight: 500
    },

    body1: {
      fontSize: '1rem'
    }
  }
}

export default {
  light: createMuiTheme({
    ...base,
    palette: {
      type: 'light',
      ...base.palette
    },
  }),

  dark: createMuiTheme({
    ...base,
    palette: {
      type: 'dark',
      background: {
        paper: '#151515',
        default: '#0e0e0e'
      },
      ...base.palette
    },
  })
}
