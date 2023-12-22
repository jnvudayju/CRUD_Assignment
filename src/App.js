import "./App.css";
import { routes } from "./Routes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { React } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component }, index) => (
            <Route path={path} element={component} key={index} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
