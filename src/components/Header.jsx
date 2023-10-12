import { React, useState } from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/site-logo.svg'
import { Link, animateScroll as scroll} from 'react-scroll';
import {FaShoppingBag} from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import Humbergere from '../assets/img/humberger.svg'
import Eth from '../assets/img/eth-logo.svg'
import Twitter from '../assets/img/twitter.svg'
import Telegram from '../assets/img/telegram.svg'
import Discord from '../assets/img/descord.svg'
import avater from '../assets/img/menu__popup_avater.png'
import { NavLink } from 'react-router-dom';

export default function Header(){
    const [isMobile, setIsMobile] = useState(false);
    const setMobile = () => {
        setIsMobile(!isMobile);}

    const [activeSocial, setActiveSocial] = useState({
        title:'ETH',
        img:Eth
    });
    const [socialList, setSocialList] = useState([
        {
            title:'ETH',
            img: Eth
        },
        {
            title:'Twitter',
            img:Twitter
        },
        {
            title:'Telegram',
            img:Telegram
        },
        {
            title:'Discord',
            img:Discord
        },
    ]);
    const changeSocial = (e) => {
        setActiveSocial(e)
    }
    return(
        <header className="heading">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div className='d-flex'>
                    <Button className="humberger d-none" onClick={()=> setMobile()}>
                        <img src={Humbergere} alt="" />
                    </Button>
                        <Navbar.Brand href="/">
                            <a href="/"><img src={logo} alt="" /></a>
                        </Navbar.Brand>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/stake">Stake</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                            <NavLink to="/socials">Socials</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <div className='header-buttons d-flex align-items-center'>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    <img src={activeSocial.img} alt="" /> {activeSocial.title}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='overflow-hidden'>
                                    {socialList.map((item, index) => (
                                        <Dropdown.Item onClick={()=> changeSocial(item)} key={index}>
                                            <img src={item.img} alt="" /> {item.title}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        <a href="/" className='base-btn'>Chart</a>
                        <a href="/" className='base-btn active Buy'><FaShoppingBag /><span> Buy Creso</span></a>
                    </div>
                    {!isMobile ? '' : 
                    <div className='menu__popup'>
                        <figure className='avater'>
                            <img src={avater} alt="" />
                        </figure>
                        <p>0xBa9f...273c71D</p>
                        <Dropdown>
                            <Dropdown.Toggle>
                                <img src={activeSocial.img} alt="" /> {activeSocial.title}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='overflow-hidden'>
                                {socialList.map((item, index) => (
                                    <Dropdown.Item onClick={()=> changeSocial(item)} key={index}>
                                        <img src={item.img} alt="" /> {item.title}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="mobile__menu">
                            <ul>
                                <li><NavLink to="/stake">Stake</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/socials">Socials</NavLink></li>
                            </ul>
                        </div>
                        <div className="header__social__icon">
                            <ul>
                                <li><a href="/"><img src={Twitter} alt="" /></a></li>
                                <li><a href="/"><img src={Telegram} alt="" /></a></li>
                                <li><a href="/"><img src={Discord} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    }
                </Container>
            </Navbar>
        </header>
    );
}