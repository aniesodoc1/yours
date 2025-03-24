import React from 'react'
import HomePage from './pages/homePage/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Layout, RequireAuth} from './pages/layout/Layout'
import SinglePage from './pages/singlePage.jsx/SinglePage'
import ProfilePage from './pages/profilePage/ProfilePage'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ProfileUpdatePage from './pages/profileUpdatePage/ProfileUpdatePage'
import { singlePageLoader } from './lib/loaders'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Agents from './pages/agent/Agents'
import NewPostPage from './pages/newPostPage/NewPostPage'
import ListPage from "./pages/listPage/ListPage"
import "leaflet/dist/leaflet.css";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/list",
        element: <ListPage/>
      },
      {
        path: "/:id",
        element: <SinglePage/>,
        loader: singlePageLoader
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/abouts",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/agents",
        element: <Agents />,
      },
    ]
  },
  {
    path: "/",
    element:<RequireAuth/>,
    children: [
      {
        path: "/profile",
        element: <ProfilePage/>
      },
      {
        path: "/profile/update",
        element: <ProfileUpdatePage/>
      },
      {
        path: "/add",
        element: <NewPostPage/>
      }
  ],
  }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App