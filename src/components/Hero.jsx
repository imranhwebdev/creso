import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default function Hero(){
    return(
        <div className="hero">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={12}>
                        <div className="hero-content">

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
