import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import menu from './menu-button-of-three-horizontal-lines.svg';
import './Header.css'

const Header = ({toggle, toggleModal}) => {
    return (
        <Wrapper>
          <nav className="head">
            <h1 className="head-nav">Prof. Dr. Jochem Müller</h1>
                <img src={menu} alt='menu button' className="head-nav-menu__button" onClick={toggleModal}/>
            <ul className="head-nav-menu" style={ document.body.clientWidth > 768 ? {display: 'flex'} : toggle && document.body.clientWidth < 768  ? {display: 'block'} : {display: 'none'}}>
                <li className="head-nav-menu-item"> 
                    <NavLink to='/' className="head-nav-menu__link" onClick={toggleModal}>Aktuelles</NavLink>
                </li>
                <li className="head-nav-menu-item"> 
                    <NavLink to='/projekte' className="head-nav-menu__link" onClick={toggleModal}>Projekte</NavLink>
                </li>
                <li className="head-nav-menu-item"> 
                    <NavLink to='/studierende' className="head-nav-menu__link" onClick={toggleModal}>Studierende</NavLink>
                </li>
                <li className="head-nav-menu-item"> 
                    <NavLink to='/unternehmen' className="head-nav-menu__link" onClick={toggleModal}>Unternehmen</NavLink>
                </li>
                <li className="head-nav-menu-item" > 
                    <NavLink to='/zurPerson' className="head-nav-menu__link" onClick={toggleModal}>Zur Person</NavLink>
                </li>
                <li className="head-nav-menu-item"> 
                    <NavLink to='/abschlussarbeiten' className="head-nav-menu__link" onClick={toggleModal}>Abschlussarbeiten</NavLink>
                </li>
                <li className="head-nav-menu-item"> 
                    <NavLink to='/kontakt' className="head-nav-menu__link" onClick={toggleModal}>Kontakt</NavLink>
                </li>
            </ul>
        </nav>  
        </Wrapper>
    );
};

export default Header;