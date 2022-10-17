import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Providers/User/User";

function Verify(){
    const {user} = useContext(UserContext)
    return user ? <Outlet/> : <Navigate to="/" replace/>
} 

export default Verify;