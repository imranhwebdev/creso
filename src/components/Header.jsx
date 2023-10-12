import { React, useState } from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/site-logo.svg'
import {FaShoppingBag} from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import Humbergere from '../assets/img/humberger.svg'
import Eth from '../assets/img/eth-logo.svg'
import Twitter from '../assets/img/twitter.svg'
import Telegram from '../assets/img/telegram.svg'
import Discord from '../assets/img/descord.svg'
// import avater from '../assets/img/menu__popup_avater.png'
import { NavLink } from 'react-router-dom';

export default function Header(){
    const [isMobile, setIsMobile] = useState(false);
    const setMobile = () => {
        setIsMobile(!isMobile);}

    const [activeSocial, setActiveSocial] = useState({
        title:'Socials',
    });
    const [socialList, setSocialList] = useState([
        {
            title:'Twitter',
            img:Twitter,
            url:'/twitter.com'
        },
        {
            title:'Telegram',
            img:Telegram,
            url:'/telegram.com',
        },
        {
            title:'Discord',
            img:Discord,
            url:'/discord.com',
        },
    ]);
    const changeSocial = (e) => {
        setActiveSocial(e)
    }

    const [socialShow, setClassName] = useState('');
    const socialHandleClick = () => {
        if (socialShow === '') {
        setClassName('show_social');
        } else {
        setClassName('');
        }
    };
 
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
                            <li><NavLink to="/stake">Stake</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    {activeSocial.title}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='overflow-hidden'>
                                    {socialList.map((item, index) => (
                                        <Dropdown.Item>
                                            <a href={item.url}><img src={item.img} alt="" /> {item.title}</a>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                    <div className='header-buttons d-flex align-items-center'>
                            {/* <Dropdown>
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
                            </Dropdown> */}
                        <a href="/" className='base-btn'>Chart</a>
                        <a href="/" className='base-btn active Buy'><FaShoppingBag /><span> Buy Creso</span></a>
                    </div>
                    {!isMobile ? '' : 
                    <div className='menu__popup'>
                        {/* <figure className='avater'>
                            <img src={avater} alt="" />
                        </figure>
                        <p>0xBa9f...273c71D</p> */}
                        {/* <Dropdown>
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
                        </Dropdown> */}
                        <a href="/" className='base-btn'>connect wallet</a>
                        <div className="mobile__menu">
                            <ul>
                                <li><NavLink to="/stake">Stake</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li onClick={socialHandleClick}><NavLink>Socials</NavLink></li>
                            </ul>
                        </div>
                        <div className="header__social__icon">
                            <ul className={socialShow}>
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