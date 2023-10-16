import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

const Layout = () => {
          return (
                    <>
                              <Header /> {/***HEADER */}
                              <Outlet /> {/***MAIN CONTENT */}
                              <Footer /> {/***FOOTER */}
                    </>
          )
}

export default Layout;