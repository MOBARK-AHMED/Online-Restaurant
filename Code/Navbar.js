import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import { FaCartPlus } from 'react-icons/fa'
// import logo from './Logo.jpg'

const Navbar = () => {
  const [ showLinks, setShowLinks ] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    const linksHight = linksRef.current.getBoundingClientRect().height;
    if (showLinks){
      linksContainerRef.current.style.height = `${linksHight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const [ navbar, setNavbar] = useState(false);
  const fixedNavbar = () => {
    if(window.screenY >= 80){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', fixedNavbar);

  return (
    <nav className={`${ navbar ? "fixed-navbar" :  ''}`}>
      <div className='nav-center'>
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <p className='logo'><span className='black'>M.</span><span className='green'>A.</span><span className='blue'>R.</span><span className='red'>S</span></p>
          <button className='nav-toggle' onClick={ () => setShowLinks(!showLinks)}>
            <FaBars></FaBars>
          </button>
        </div>
        <div className="links-container show-container" ref={linksContainerRef}>
          <div className="links" ref={linksRef}>
          {
            links.map( (item) => {
              const { id, url, text } = item;
              return (
              <div key={id}>
                <a href={url}>{text}</a>
              </div>
              )
            })
          }
          </div>
        </div>
        <div className="social-icons">
        {
            social.map( (item) => {
              const { id, url, icon } = item;
              return (
              <div key={id}>
                <a href={url}>{icon}</a>
              </div>
              )
            })
          }
        </div>
        <button className='cart-list'><FaCartPlus></FaCartPlus></button>
      </div>
    </nav>
  );
}

export default Navbar
