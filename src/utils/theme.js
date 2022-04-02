import { createTheme } from "@mui/material";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const colors = {
  background: "#fff",
  primary: "#0156a7",
  secondary: "#d1d1d1",
  secondary2: "#F7F7F7",
  danger: "#ed1b24",
  success: "#008963",
  text: "#323232",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const GlobalStyle = createGlobalStyle`
  body {
    background:${colors.background};
    color:${colors.text};
    font-family: 'League Spartan', sans-serif;
  }
`;

const muiTheme = createTheme({
  typography: {
    allVariants: {
      color: colors.text,
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    secondary2: {
      main: colors.secondary2,
    },
    danger: { main: colors.danger },
    success: { main: colors.success },
  },
});

const styledTheme = {
  textColor: colors.text,
  primary: colors.primary,
  secondary: colors.secondary,
  secondary2: colors.secondary2,
  danger: colors.danger,
  success: colors.success,
  media: {
    mobileS: size.mobileS,
    mobileM: size.mobileM,
    mobileL: size.mobileL,
    tablet: size.tablet,
    laptop: size.laptop,
    laptopL: size.laptopL,
    desktop: size.desktop,
    desktopL: size.desktop,
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <GlobalStyle />
      <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
