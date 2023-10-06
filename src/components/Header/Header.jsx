import React from "react";
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import { useState, useEffect } from "react";


function Header() {
  const [menuOpened,setmenuOpened] = useState(false)
  const getMenuStyles = (menuOpened)=>{
    if(document.documentElement.clientWidth <=800)
    {
      return{right: !menuOpened && '-100%'}
    }
  }
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`h-wrapper ${isSticky ? 'sticky' : ''}`}>
      
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={()=>{
          setmenuOpened(false);
        }}>

        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
         <a href="#residencies">Reidencies</a>
          <a href="#values">Our Values</a>
          <a href="#contacts">Contact Us</a>
          <a href="#getstart">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="f-menu" onClick={()=>setmenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
      </div>
      </div>
      
    </section>
  );
}
  


export default Header;
