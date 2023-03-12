import React from 'react';
import './App.css';
import Main from './components/Main/Main';

const AppContext = React.createContext('');

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <AppContext.Provider value="">
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
