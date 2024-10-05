import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import LoginPage from './pages/Login';
import AboutUs from './pages/Über_Uns';
import Member from './pages/members';
import Landingpage from './pages/lp';
import NotFound from './pages/NotFound';
import Kategorien from './component/KategorienListe'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <AboutUs/>,
  },
  {
    path: "members",
    element: <Member/>,
  },
  {
    path: "Login",
    element: <LoginPage/>,
  },
  {
    path: "landingpage",
    element: <Landingpage/>,
  },
  {
    path: "kategorien",
    element: <Kategorien/>
  },
  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <NotFound />
  </RouterProvider>
);

