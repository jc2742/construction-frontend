import React from "react";
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import AuthView from './views/AuthView';
import Login from "./views/LoginView";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./views/LogoutView";

function App() {
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
