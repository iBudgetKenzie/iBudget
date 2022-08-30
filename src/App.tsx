import React from "react";
import Routes from "./Routes/index";


import GlobalStyle from './styles/global';
import Login from './pages/Login';


function App() {
  return (
    <>  
      <GlobalStyle/>
      <Login/>
      <Routes />
    </>
  );
}

export default App;
