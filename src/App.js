import Routers from "./routes/routes";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/index";
import ReduxProvider from "./redux/store";
function App() {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
