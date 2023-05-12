import { Paper, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Routes from "./Routes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TopBar from "./Components/TopBar";

const themes = createTheme();
function App() {
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  const navigate = useNavigate();
  const appState = useSelector((state) => state);
  useEffect(() => {
    // console.log({appState});
    if (appState.token === "") {
      navigate("/signin");
    }
  }, [appState]);
  return (
    <>
      <ThemeProvider theme={themes}>
        {appState.token !== "" && <TopBar userData={appState} />}
        <Paper
          style={{
            marginTop: appState.token !== "" ? "" : "10px",
          }}
        >
          <Routes pages={pages} />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
