import { React, useState } from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/site-logo.svg'
import { Link, animateScroll as scroll} from 'react-scroll';
import {FaShoppingBag} from "react-icons/fa";

export default function Header(){
    const [fix, setFix] = useState(false)
    function setFixed(){
                if(window.scrollY >= 392){
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
                    <Navbar.Brand href="/">
                        <a href="/"><img src={logo} alt="" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="about"  spy={true} smooth={true} offset={50} duration={500} >Stake</Link>
                        <Link to="services" spy={true} smooth={true} offset={50} duration={500} >Blog</Link>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Socials</Link>
                    </Nav>
                    <a href="/" className='base-btn'>Chart</a>
                    <a href="/" className='base-btn active'><FaShoppingBag /> Buy Creso</a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}