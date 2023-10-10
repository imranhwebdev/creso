import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GaslessLeftimg1 from '../assets/img/gasless-img1.png'
import GaslessLeftimg2 from '../assets/img/gasless-img2.png'
import GaslessLeftimg3 from '../assets/img/gasless-img3.png'
import Gaslessrightimg from '../assets/img/gasless-right-img.png'
export default function Gasless(){
    return(
        <div className="gasless" id='gasless'>
            <div className="gasless-right-img">
                <figure>
                    <img src={Gaslessrightimg} alt="" />
                </figure>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={5}>
                        <div className="gasless-content">
                            <figure className='img1'>
                                <img src={GaslessLeftimg1} alt="" />
                            </figure>
                            <figure className='img2'>
                                <img src={GaslessLeftimg2} alt="" />
                            </figure>
                            <figure className='img3'>
                                <img src={GaslessLeftimg3} alt="" />
                            </figure>
                            <h2>Gasless <span>Transactions</span></h2>
                            <p>Use any token to manage gas fees. Relish the ease as an App or a friend takes care of the gas, turning every transaction into a smooth sail.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
