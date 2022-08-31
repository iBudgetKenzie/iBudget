<<<<<<< HEAD
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
=======
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserProvider } from "./contexts/UserContext";
import { BudgetProvider } from "./contexts/BudgetContext";

import GlobalStyle from "./styles/global";
import Routes from "./Routes/index";

function App() {
  return (
    <>
      <UserProvider>
        <BudgetProvider>
          <GlobalStyle />
          <ToastContainer
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes />
        </BudgetProvider>
      </UserProvider>
    </>
>>>>>>> 31cd6b44a9126c20f29d8e716e83dc21ac12f2f9
  );
}

export default App;
