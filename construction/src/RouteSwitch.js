import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PrivateRoute from "./components/PrivateRoute";
import AuthView from "./views/AuthView";
import Login from "./views/LoginView";
import Logout from "./views/LogoutView";

// Handles the routing between each page
const RouteSwitch = () => {
    return ( 
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path= "/private/" element={<PrivateRoute element={<AuthView/>} />}/>
                    <Route path= "/login/" element={<Login/>}/>
                    <Route path= "/logout/" element={<Logout/>}/>
                </Routes>
        </BrowserRouter>
     );
}
 
export default RouteSwitch;