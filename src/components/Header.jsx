import { React, useState } from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/site-logo.svg'
import { Link, animateScroll as scroll} from 'react-scroll';
import {FaShoppingBag} from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(){
    const [fix, setFix] = useState(false)
    function setFixed(){
                if(window.scrollY >= 100){
                    setFix(true)
                }else{
                    setFix(false)
                }
            }
            window.addEventListener("scroll", setFixed)
         return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div className='d-flex'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Brand href="/">
                            <a href="/"><img src={logo} alt="" /></a>
                        </Navbar.Brand>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="about"  spy={true} smooth={true} offset={50} duration={500} >Stake</Link>
                            <Link to="services" spy={true} smooth={true} offset={50} duration={500} >Blog</Link>
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Socials</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className='header-buttons d-flex align-items-center'>
                            <NavDropdown title="ETH" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ETH</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> Twitter (X)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Telegram</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Discord</NavDropdown.Item>
                            </NavDropdown>
                        <a href="/" className='base-btn'>Chart</a>
                        <a href="/" className='base-btn active Buy'><FaShoppingBag /><span> Buy Creso</span></a>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
}