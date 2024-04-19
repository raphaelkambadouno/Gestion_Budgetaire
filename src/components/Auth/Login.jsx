import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../DatabaseConfig";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [notification, setNotification] = useState("")
    const {getUserInfo, setUser} = useContext(AuthContext)

    const signIn = async (e)=>{
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            const userInfo = await getUserInfo(auth.currentUser.uid)
            const data = {userInfo, ...auth.currentUser}
            localStorage.setItem('user', JSON.stringify(data))
            setUser(data)
            navigate('/')
        } catch (error) {
            setNotification("Erreur d'authentification")
            alert('Indentifiant incorrect')
        }
    }
    return (
        <div className='login-page'>
            <div className="login-box">
                <div className="login-logo"><b>Budget</b>Tracker</div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={signIn} method="post">
                            <div className="input-group mb-3">
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control"
                                    placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                            </div>
                            <div className="input-group mb-3">
                                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control"
                                    placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Se connecter
                                </button>
                            </div>
                        </form>
                        
                        <div className="d-flex justify-content-center">
                            <NavLink to="/register" className="mt-3">Register a 
                                new membership</NavLink>
                        </div>
                    </div>

                </div>
        </div>
        </div>
    );
}

export default Login;
