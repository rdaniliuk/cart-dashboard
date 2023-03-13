import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";

export const AppContext = React.createContext({});

function App() {
  const [carts, setCarts] = useState([]);
  return (
    <div className="App">
      <p>Hello World</p>
      <AppContext.Provider value={{ carts, setCarts }}>
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
