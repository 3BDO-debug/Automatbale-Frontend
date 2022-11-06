// ----------------------------------------------------------------------

export default function Typography(theme) {
  return {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'gradientText' },
          style: {
            background: 'linear-gradient(45deg,#8b3dff, #00c4cc)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            WebkitBackgroundClip: 'text',
          },
        },
      ],
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
