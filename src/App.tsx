import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { UserProvider } from "./contexts/UserContext"

import GlobalStyle from './styles/global';
import Routes from "./Routes/index";

function App() {
  return (
    <>  
      <UserProvider>
        <GlobalStyle/>
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
        <Routes/>

      </UserProvider>
    </>
  );
}

export default App;
