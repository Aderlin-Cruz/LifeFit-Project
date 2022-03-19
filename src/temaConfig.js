import { lightGreen, purple } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3c3a3d',
    },
    secondary: {
      main:'#fed022',
    },
  },
});

export default theme;
