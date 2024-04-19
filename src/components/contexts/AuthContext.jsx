import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { auth, db } from "../../DatabaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState()
    const navigate = useNavigate()

    const getUser = () =>{
        const data = localStorage.getItem('user')
        setUser(JSON.parse(data))
    }

    const getUserInfo = async (id) =>{
        const userInfo = collection(db, 'users')
        const q = query(userInfo, where('uid', '==', id))
        let val = {}
        await getDocs(q).then((querySnapshot) => {
            const doc = querySnapshot.docs[0]
            val = doc.data()
        }).catch((error) => {
            console.log("Erreur lors de la récupération des documents : ", error);
        });
        return val
    }

    const logOut = async ()=>{
        await signOut(auth)
        localStorage.removeItem('user')
        setUser()
        navigate('/login')
    }

    return <AuthContext.Provider value={{ user, getUser, getUserInfo, logOut, setUser }}>
        {children}
    </AuthContext.Provider>
}

export {AuthProvider, AuthContext}