import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/footer-logo.svg'
import {FaShoppingBag} from "react-icons/fa";
export default function Footer(){
    return(
        <footer className="footer">
           <Container>
            <div className="join__advenced__bottom d-block d-md-none">
                <Row className='justify-content-center'>
                    <Col md={12}>
                        <div className="join__menu text-center mb-4">
                            <ul>
                                <li><a href="/">Stake</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Socials</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="join__buttons text-center mb-4">
                            <a href="/" className='base-btn'>Chart</a>
                            <a href="/" className='base-btn active'><FaShoppingBag /> Buy Creso</a>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col lg={12}>
                    <div className="footer-content text-center">
                       <a href="/" className='footer-logo'> <img src={FooterLogo} alt="" /></a>
                        <p>© Copyright 202 Mr.farahzad, Inc.</p>
                    </div>
                </Col>
            </Row>
           </Container>
           
        </footer>
    )
}