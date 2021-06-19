import { createMuiTheme } from "@material-ui/core";

const palette = {
  primary: {
    dark: '#a31545',
    main: '#ff548e',
    light: '#ed4b82'
  }
}

const shadows = [
  'none',
  'rgb(0 0 0 / 8%) 0px 1px 12px',
  'rgb(0 0 0 / 8%) 0px 1px 12px',
  'rgb(0 0 0 / 8%) 0px 1px 12px',
  'rgb(0 0 0 / 8%) 0px 1px 12px',
  'rgb(0 0 0 / 8%) 0px 1px 12px',
  'rgb(0 0 0 / 8%) 0px 1px 12px',
  'rgb(0 0 0 / 8%) 0px 1px 12px',
]

const typography = {
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

export default {
  light: createMuiTheme({
    palette: {
      type: 'light',
      ...palette
    },
    shadows,
    typography
  }),

  dark: createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        default: '#0e0e0e'
      },
      ...palette
    },
    shadows,
    typography
  })
}
