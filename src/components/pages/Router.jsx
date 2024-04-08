import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '../Auth/Login'
import Register from '../Auth/Register';
import Aside from '../layouts/Aside';
import Dashbord from './Dashbord';
import Categories from './Categories';
import Depenses from './Depenses';
import Objectifs from './Objectifs';
import NoPages from './NoPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/dashbord',
        element: <Dashbord />
      },
      {
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/depenses',
        element: <Depenses />
      },
      {
        path: '/objectifs',
        element: <Objectifs />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '*',
    element: <NoPages />
  }
]);

function Router() {

  return (
    <RouterProvider router={router} />
  )
}

function Home() {
  return (
    <>
      <Aside />
      <Outlet />
    </>
  );
}

export default Router;
