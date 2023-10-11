import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/footer-logo.svg'
import {FaShoppingBag} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export default function Footer(){
    return(
        <footer className="Stake__footer">
           <Container>
            <Row className='align-items-center'>
                <Col lg={4}>
                    <div className="footer-menu">
                        <ul>
                            <li><NavLink to="stake"  spy={true} smooth={true} offset={50} duration={500} >Stake</NavLink></li>
                            <li><NavLink to="blog" spy={true} smooth={true} offset={50} duration={500} >Blog</NavLink></li>
                            <li><NavLink to="socials" spy={true} smooth={true} offset={50} duration={500} >Socials</NavLink></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={4} className='order-3 order-lg-2 mt-4 mt-lg-0'>
                    <div className="footer-middle text-center">
                       <a href="/" className='footer-logo'> <img src={FooterLogo} alt="" /></a>
                        <p>© Copyright 2023 Mr.farahzad, Inc.</p>
                    </div>
                </Col>
                <Col lg={4} className='order-2 order-lg-3'>
                    <div className="join__buttons text-center mt-4 mt-lg-0">
                        <a href="/" className='base-btn'>Chart</a>
                        <a href="/" className='base-btn active'><FaShoppingBag /> Buy Creso</a>
                    </div>
                </Col>
            </Row>
           </Container>
           
        </footer>
    )
}