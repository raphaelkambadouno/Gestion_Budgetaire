// import { Navigate, Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
// import Login from '../Auth/Login'
// import Register from '../Auth/Register';
// import Dashbord from './Dashbord';
// import Categories from './Categories';
// import Depenses from './Depenses';
// import Objectifs from './Objectifs';
// import NoPages from './NoPages';
// import Footer from '../layouts/Footer';
// import Navbar from '../layouts/Navbar';
// import { useContext, useEffect } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Home />,
// 		children: [
// 			{
// 				path: '/',
// 				element: <Dashbord />
// 			},
// 			{
// 				path: '/dashbord',
// 				element: <Dashbord />
// 			},
// 			{
// 				path: '/categories',
// 				element: <Categories />
// 			},
// 			{
// 				path: '/depenses',
// 				element: <Depenses />
// 			},
// 			{
// 				path: '/objectifs',
// 				element: <Objectifs />
// 			}
// 		]
// 	},
// 	{
// 		path: '/login',
// 		element: <Login />
// 	},
// 	{
// 		path: '/register',
// 		element: <Register />
// 	},
// 	{
// 		path: '*',
// 		element: <NoPages />
// 	}
// ]);

// function Router() {

// 	return (
// 		<RouterProvider router={router} />
// 	)
// }

// function Home() {
// 	const { user, getUser } = useContext(AuthContext)
//     useEffect(()=>{
//         getUser()
//     }, [])
	
// 	return (
// 		<>
// 			<Navbar />
// 			<div className="content-wrapper">
// 				{!user ? <Outlet /> : <Navigate to={'/'} />}
// 			</div>
// 			<Footer />
// 		</>
// 	);
// }

// export default Router;
