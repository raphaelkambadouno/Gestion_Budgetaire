import { Routes, Route } from 'react-router-dom';
import Dashbord from './components/pages/Dashbord';
import Categories from './components/pages/Categories';
import Depenses from './components/pages/Depenses';
import Objectifs from './components/pages/Objectifs';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthGuest from './components/Auth/AuthGuest';
import NotAuthGuest from './components/Auth/NotAuthGuest';
import Home from './components/pages/Home';
import { useContext , useEffect} from 'react';
import { AuthContext } from './components/contexts/AuthContext';

function App() {
    const {user, getUser} = useContext(AuthContext)
    useEffect(()=>{
        if (!user) {
            getUser()
        }
    }, [])
    return (
        <Routes>
            <Route element={<AuthGuest/>}>
                <Route path='/' element={<Home/>}>
                    <Route path='/' element={<Dashbord/>}></Route>
                    <Route path='/home' element={<Dashbord/>}></Route>
                    <Route path='/dashbord' element={<Dashbord/>}></Route>
                    <Route path='/categories' element={<Categories/>}></Route>
                    <Route path='/depenses' element={<Depenses/>}></Route>
                    <Route path='/objectifs' element={<Objectifs/>}></Route>
                </Route>
            </Route>
            <Route element={<NotAuthGuest/>}>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Route>
        </Routes>
    );
}

export default App;
