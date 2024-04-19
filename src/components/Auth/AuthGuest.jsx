import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const AuthGuest = () =>{
    const {user} = useContext(AuthContext)
    
    return user ? <Outlet />: <Navigate to={'/login'} />
}

export default AuthGuest

