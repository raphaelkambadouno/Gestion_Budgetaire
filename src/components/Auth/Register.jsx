import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../../DatabaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
    const navigate = useNavigate()
    const {getUserInfo} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [name, setName] = useState("")
    const [notification, setNotification] = useState("")

    const createUserInfo = (id) =>{
        const userCollection = collection(db, 'users')
        addDoc(userCollection, {
            name: name,
            uid: id
        })
    }

    const signUp = async (e) =>{
        e.preventDefault()

        if (password === passwordConfirm) {
            try {
                const snapshot = await createUserWithEmailAndPassword(auth, email, password)
                console.log(auth.currentUser.uid);
                if (snapshot) {
                    const userId = auth.currentUser.uid
                    createUserInfo(userId)
                    const userInfo = await getUserInfo(userId)
                    const data = {userInfo, ...auth.currentUser}
                    localStorage.setItem('user', JSON.stringify(data))
                    navigate('/')
                }else setNotification('Erreur')
                
            } catch (error) {
                setNotification("Une erreur s'est produite")
                console.log(error);
            } 
        }else setNotification("Les deux mot de pass ne sont identique")
    }   

    return (
        <div className="register-page">
            <div className="register-box">
                <div className="register-logo"><b>Budget</b>Tracker</div>

                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Register a new membership</p>
                        <form onSubmit={signUp} method="post">
                            <div className="input-group mb-3">
                                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Full name" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user"></span>
                                        </div>
                                    </div>
                            </div>
                            <div className="input-group mb-3">
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                            </div>
                            <div className="input-group mb-3">
                                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                            </div>
                            <div className="input-group mb-3">
                                <input value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} type="password" className="form-control" placeholder="Retype password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    S'enregistrer
                                </button>
                            </div>
                            <div className="d-flex justify-content-center">
                                <NavLink to="/login" className="mt-3">You have an account ? Login</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
