import { React, useState } from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/site-logo.svg'
import { Link, animateScroll as scroll} from 'react-scroll';
import {FaShoppingBag} from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import Eth from '../assets/img/eth-logo.svg'
import Twitter from '../assets/img/twitter.svg'
import Telegram from '../assets/img/telegram.svg'
import Discord from '../assets/img/descord.svg'

export default function Header(){
    const [fix, setFix] = useState(false);
    function setFixed(){
        if(window.scrollY >= 100){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed);
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
                            <Dropdown>
                                <Dropdown.Toggle>
                                <img src={Eth} alt="" /> ETH
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"> <img src={Twitter} alt="" /> Twitter (X)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><img src={Telegram} alt="" /> Telegram</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><img src={Discord} alt="" /> Discord</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        <a href="/" className='base-btn'>Chart</a>
                        <a href="/" className='base-btn active Buy'><FaShoppingBag /><span> Buy Creso</span></a>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
}