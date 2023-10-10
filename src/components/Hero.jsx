import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Herotitleimg from '../assets/img/herotitleimg.png'
import heroimg1 from '../assets/img/hero-right-img.png'
import heroimg2 from '../assets/img/hero-right-img2.png'
export default function Hero(){
    return(
        <div className="hero">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={8}>
                        <div className="hero-content">
                            <span>Web3 Made Easy</span>
                            <h1>Your <b>Next-Gen</b>
                                <span><img src={Herotitleimg} alt="" /> <b>Smart</b> Wallet</span>
                            </h1>
                            <p>Seedless, Gasless, Fearless. Creso makes your <b>Web3</b> journey easy and safe, powered by <b>ERC-4337</b>. It's not just a wallet—it's your simple key to the decentralized world.</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="hero-right">
                           <figure>
                            <img src={heroimg2} alt="" />
                            <img src={heroimg1} alt="" />
                           </figure>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
