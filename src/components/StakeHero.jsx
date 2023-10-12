import React, { useState } from 'react';
import { Col, Container, Row, Tabs, Tab  } from 'react-bootstrap'
import StakeImg1 from '../assets/img/stakehero-img1.png'
import Stakeheroimg from '../assets/img/stake-left-img.png'
import Dash from '../assets/img/dash.png'
import Plus from '../assets/img/plus-02.png'
const StakeHero = () => {
    const [counter, setCounter] = useState(15);
    const incrementHandler = () => {
        setCounter((val) => val + 1);
    };
    const decrementHandler = () => {
        setCounter((val) => val - 1)
    };
    const [key, setKey] = useState('tab1');
    return (
            <div className="stake__hero">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="stakehero-content">
                            <div className="stake__content_left d-flex">
                                <figure className='stakeimg1'>
                                    <img src={StakeImg1} alt="" />
                                </figure>
                                <div className='content'>
                                    <h1>Stake <b>Ether</b></h1>
                                    <p>Stake Ether and get <b>dETH</b> while earning interests You can <b>unstake</b> anytime</p>
                                </div>
                            </div>
                           <figure className='stake__heroimg'>
                            <img src={Stakeheroimg} alt="" />
                           </figure>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="stakehero-right">
                            
                            <Tabs  activeKey={key} onSelect={(k) => setKey(k)}>
                                <Tab eventKey="tab1" title="Stake">
                                    <div className="stake__ether">
                                        <h4 className='stake__box_title'>Stake Ether</h4>
                                        <div className="stake__ether_box">
                                                <div className="minus">
                                                    <figure onClick={decrementHandler}>
                                                        <img src={Dash} alt="" />
                                                    </figure>
                                                    <span>{counter}</span>
                                                </div>
                                                <div className="max">
                                                    <span className='yellow'>MAX</span>
                                                    <figure onClick={incrementHandler}>
                                                        <img src={Plus} alt="" />
                                                    </figure>
                                                </div>
                                        </div>
                                        <div className="balance text-end mt-2">
                                            <p>Balance <span>52.05 ETH</span></p>
                                        </div>
                                    </div>
                                    <div className="transection__summary">
                                        <h4 className='stake__box_title'>Transaction Summary</h4>
                                        <div className="transection__box">
                                            <div className="sigle-item">
                                                <p>You will recive</p>
                                                <span>187.49xETH</span>
                                            </div>
                                            <div className="sigle-item">
                                                <p>Average return</p>
                                                <span className='yellow'>5.07% APR</span>
                                            </div>
                                            <div className="sigle-item">
                                                <p>Transaction fee</p>
                                                <span>0.0036ETH ($5.50USD)</span>
                                            </div>
                                            <div className="sigle-item">
                                                <p>Reward fee</p>
                                                <span>7%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/" className='stake__eth_btn'>Stake ETH</a>
                                </Tab>
                                <Tab eventKey="tab2" title="Unstake">
                                    <div className="stake__ether">
                                        <h4 className='stake__box_title'>Stake Ether</h4>
                                        <div className="stake__ether_box">
                                                <div className="minus">
                                                    <figure onClick={decrementHandler}>
                                                        <img src={Dash} alt="" />
                                                    </figure>
                                                    <span>{counter}</span>
                                                </div>
                                                <div className="max">
                                                    <span className='yellow'>MAX</span>
                                                    <figure onClick={incrementHandler}>
                                                        <img src={Plus} alt="" />
                                                    </figure>
                                                </div>
                                        </div>
                                        <div className="balance text-end mt-2">
                                            <p>Balance <span>52.05 ETH</span></p>
                                        </div>
                                    </div>
                                    <div className="transection__summary">
                                        <h4 className='stake__box_title'>Transaction Summary</h4>
                                        <div className="transection__box">
                                            <div className="sigle-item">
                                                <p>You will recive</p>
                                                <span>187.49xETH</span>
                                            </div>
                                            <div className="sigle-item">
                                                <p>Average return</p>
                                                <span className='yellow'>5.07% APR</span>
                                            </div>
                                            <div className="sigle-item">
                                                <p>Transaction fee</p>
                                                <span>0.0036ETH ($5.50USD)</span>
                                            </div>
                                            <div className="sigle-item">
                                                <p>Reward fee</p>
                                                <span>7%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/" className='stake__eth_btn'>Stake ETH</a>
                                </Tab>
                            </Tabs>
                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default StakeHero;