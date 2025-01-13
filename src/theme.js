import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#3182CE',
    secondary: '#805AD5',
  },
  components: {
    Heading: {
      baseStyle: {
        color: "#1a202c",
      },
    },
    Text: {
      baseStyle: {
        color: "#1a202c",
      },
    },
  },
});

export default theme;
