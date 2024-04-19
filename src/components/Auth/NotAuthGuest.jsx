import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const NotAuthGuest = () =>{
    const {user} = useContext(AuthContext)
    return !user ?  <Outlet /> : <Navigate to={'/'} />
}

export default NotAuthGuest

