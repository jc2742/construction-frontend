import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";


export default function PrivateRoute(component){
    const token = localStorage.getItem("token");

    return token>1 ? component.element : <Navigate to="/login"/>;
}