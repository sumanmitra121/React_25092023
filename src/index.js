import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import User from './pages/user';
import Github from './pages/github';
import DbIntr from './service/dbIntr';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Blog />} />
      <Route path="user/:id" element={<User />} />
      <Route path="github" loader={DbIntr} element={<Github />} />
      <Route path="*" element={<div>404 !! Not Found</div>} />
    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
