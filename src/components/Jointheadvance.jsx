import {React} from 'react'
import { Col, Container, Row, Form, Button  } from 'react-bootstrap'
import JoinTopImg from '../assets/img/join-img.png'
import Joinimg2 from '../assets/img/join-img-2.png'
import Joinimg3 from '../assets/img/join-img3.png'
import {FaShoppingBag} from "react-icons/fa";
export default function Jointheadvance(){
    return(
        <div className="jointheadvance" id='jointheadvance'>
            <Container>
                <div className="jointheadvance__wrapper">
                    <div className="join__advenced__top">
                        <Row className='align-items-center'>
                            <Col lg={12}>
                                <div className="jointheadvance-top">
                                    <figure>
                                        <img src={JoinTopImg} alt="" />
                                    </figure>
                                </div>
                            </Col>
                        </Row>
                        <Row className='align-items-center justify-content-center'>
                            <Col lg={12}>
                                <div className="jointheadvance-bottom">
                                    <figure className='joinimg2'>
                                        <img src={Joinimg2} alt="" />
                                    </figure>
                                    <figure className='joinimg3'>
                                        <img src={Joinimg3} alt="" />
                                    </figure>
                                    <h2>
                                        <span className='join'>Join the </span>
                                        <b>Advance Queue</b>
                                        <span className='wallet'>for Creso Wallet</span>
                                    </h2>
                                    <p>Reserve your spot and be among the first to experience secure, effortless trading with Zonan Wallet. Sign up now, your advanced trading journey awaits!</p>
                                    <div className="sign-up">
                                    <Form>
                                        <Form.Control type="email" placeholder="Enter Your Email" />
                                        <Button type="submit"> Siqn Up </Button>
                                    </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="join__advenced__bottom d-none d-md-block">
                        <Row className=' align-items-center'>
                            <Col md={4}>
                                <div className="join__menu">
                                    <ul>
                                        <li><a href="/">Stake</a></li>
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/">Socials</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={{span: 4, offset: 4}}>
                                <div className="join__buttons">
                                    <a href="/" className='base-btn'>Chart</a>
                                    <a href="/" className='base-btn active'><FaShoppingBag /> Buy Creso</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}