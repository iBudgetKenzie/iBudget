import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { useUserContext } from "../contexts/UserContext";

const RoutesMain = () => { 

  const { isAuthenticated } = useUserContext()
  const token = localStorage.getItem("@token")

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> 
      : token !== null ? <Dashboard /> : <Navigate replace to="/home" />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
};

export default RoutesMain;
