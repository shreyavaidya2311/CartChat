import { createTheme } from "@material-ui/core";

var primary = "#7431a7";
var secondary = "#6b969b";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});

export default theme;
