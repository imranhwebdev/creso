import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Herotitleimg from '../assets/img/herotitleimg.png'
import heroimg1 from '../assets/img/hero-right-img2.png'
import heroimg2 from '../assets/img/hero-right-img.png'
export default function Hero(){
    return(
        <div className="hero">
            <Container>
                <Row>
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
                        <div className="hero-right text-end">
                           <figure className='img1'>
                            <img src={heroimg1} alt="" />
                           </figure>
                           <figure className='img2'>
                            <img src={heroimg2} alt="" />
                           </figure>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
