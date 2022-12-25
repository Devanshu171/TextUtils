import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    //
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    //
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#1e2f54";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#1e2f54";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <div>
      <Navbar
        title="TextUtils"
        abouttext="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
