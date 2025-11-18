// ----------------------------------------------------------------------

export const themeConfig = {
  /** **************************************
   * Base
   *************************************** */
  defaultMode: 'light',
  modeStorageKey: 'theme-mode',
  direction: 'ltr',
  classesPrefix: 'minimal',
  /** **************************************
   * Css variables
   *************************************** */
  cssVariables: {
    cssVarPrefix: '',
    colorSchemeSelector: 'data-color-scheme',
  },
  /** **************************************
   * Typography
   *************************************** */
  fontFamily: {
    primary: 'Montserrat Variable',
    secondary: 'Barlow',
  },
  /** **************************************
   * Palette - EdgeLink Brand Colors
   *************************************** */
  palette: {
    primary: {
      lighter: '#80BBFF', // Lighter blue
      light: '#3399FF',   // Light blue
      main: '#0077FF',    // EdgeLink main brand blue
      dark: '#003B73',    // EdgeLink deep navy accent
      darker: '#002147',  // Darker navy
      contrastText: '#FFFFFF',
    },
    secondary: {
      lighter: '#90E3E4', // Lighter teal
      light: '#58D5D6',   // Light teal
      main: '#21C7C8',    // EdgeLink teal accent
      dark: '#1A9FA0',    // Dark teal
      darker: '#136F70',  // Darker teal
      contrastText: '#FFFFFF',
    },
    info: {
      lighter: '#80BBFF',
      light: '#3399FF',
      main: '#0077FF',    // Using primary blue for info
      dark: '#0055B3',
      darker: '#003B73',
      contrastText: '#FFFFFF',
    },
    success: {
      lighter: '#90E3C2',
      light: '#5BD7A0',
      main: '#21C784',    // EdgeLink success green
      dark: '#1A9F69',
      darker: '#13774E',
      contrastText: '#FFFFFF',
    },
    warning: {
      lighter: '#FFD890',
      light: '#FFC758',
      main: '#FFB020',    // EdgeLink warning orange
      dark: '#CC8D1A',
      darker: '#996A13',
      contrastText: '#1A1D21',
    },
    error: {
      lighter: '#FFA6A7',
      light: '#FF7A7C',
      main: '#FF4D4F',    // EdgeLink danger red
      dark: '#CC3E3F',
      darker: '#992E30',
      contrastText: '#FFFFFF',
    },
    grey: {
      50: '#FAFBFC',      // Lightest
      100: '#F8F9FB',     // EdgeLink gray-100
      200: '#E6E9EF',     // EdgeLink gray-200
      300: '#C8CDD5',     // EdgeLink gray-300
      400: '#9BA1AB',     // Medium gray
      500: '#6D7480',     // EdgeLink gray-500
      600: '#555A64',     // Darker medium
      700: '#3A3F46',     // EdgeLink gray-700
      800: '#25282D',     // Very dark
      900: '#1A1D21',     // EdgeLink gray-900 (text-dark)
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
};
