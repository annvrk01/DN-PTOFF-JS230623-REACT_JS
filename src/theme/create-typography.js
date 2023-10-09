export const createTypography = () => {
  return {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1.6rem', // 1rem = 16px, 1.6rem = 16px * 1.6 = 25.6px
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '1.4rem', // 1.4rem = 16px * 1.4 = 22.4px
      fontWeight: 400,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: '1.2rem', // 1.2rem = 16px * 1.2 = 19.2px
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '1.6rem', // 1.6rem = 16px * 1.6 = 25.6px
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '1.4rem', // 1.4rem = 16px * 1.4 = 22.4px
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '1.2rem', // 1.2rem = 16px * 1.2 = 19.2px
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '3.5rem', // 3.5rem = 16px * 3.5 = 56px
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '3.1rem', // 3.1rem = 16px * 3.1 = 49.6px
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '2.775rem', // 2.775rem = 16px * 2.775 = 44.4px
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '2.5rem', // 2.5rem = 16px * 2.5 = 40px
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '1.875rem', // 1.875rem = 16px * 1.875 = 30px
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '1.40625rem', // 1.40625rem = 16px * 1.40625 = 22.5px
      lineHeight: 1.2,
    },
  };
};
