import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      200: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      300: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      400: {
        normal: 'Poppins-Regular',
        italic: 'Poppins-Italic',
      },
      500: {
        normal: 'Poppins-Medium',
        italic: 'Poppins-MediumItalic',
      },
      600: {
        normal: 'Poppins-Medium',
        italic: 'Poppins-MediumItalic',
      },
      700: {
        normal: 'Poppins-Bold',
        italic: 'Poppins-Bold',
      },
      800: {
        normal: 'Poppins-Bold',
        italic: 'Poppins-BoldItalic',
      },
      900: {
        normal: 'Poppins-Bold',
        italic: 'Poppins-BoldItalic',
      },
    },
  },
  colors: {
    primary: '#6CC0EE',
    primary2: '#CDEAFC',
    secondary: '#B2B1B5',
    secondary2: '#EBE9EA',
    error: '#E0898F',
    error2: '#F5D4D4',
    warning: '#F5D351',
    warning2: '#FDF3A4',
    success: '#83DB9B',
    success2: '#D2F9DD',
    purple: '#BB93EE',
    purple2: '#EBDCFC',
    pink: '#E68CBD',
    pink2: '#F6D9EE',
    black: '#000000',
    black2: '#B0B0B1',
    neutral: {
      white: '#FFFFFF',
      ghost: '#FAFBFD',
      issabeline: '#F5F6F8',
      gainsboro: '#E5EAEF',
      ashgrey: '#C6D0DB',
      craycola: '#B0B7BF',
      cadet: '#949DA7',
      lightslate: '#758495',
      slate: '#6A7A8A',
      electric: '#62707F',
      characoal: '#3C4D5F',
      metal: '#313F4E',
      raisin: '#232D38',
      richblack: '#232D38',
      black: '#181E25',
    },
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
});

export default theme;
