import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import './Footer.css';

const Footer = () => {
    return (
        <Wrapper>
                <nav className='footer'>
                    <h2>Datenschutz Impressum</h2>
                    <ul className="footer-menu">
                        <li className="footer-menu-item"> 
                            <a href='#' className="footer-menu-item__link--phone">0981/ 48 77 231</a>
                        </li>
                        <li className="footer-menu-item"> 
                            <a href='#' className="footer-menu-item__link--mail">Jochem.mueller@hr-anbach.de</a>
                        </li>
                        <li className="footer-menu-item"> 
                            <a href='#' className="footer-menu-item__link--home">FH Ansbach Residenzstr. 8 91522 Ansbach</a>
                        </li>
                    </ul> 
                </nav>        
        </Wrapper>
    );
};

export default Footer;