import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactFooter from './ContactFooter';

const Layout = ({ children }) => (
  <>
    <div className="bg-layer-1"/>
    <div className="bg-layer-2"/>
    <Header />
        {children}    
    <ContactFooter />
    <Footer />
  </>
);

export default Layout;