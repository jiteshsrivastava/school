import React from 'react'
import { Container, Col, Card, Row } from 'react-bootstrap';
import ImgSlider from './../imgSlider/ImgSlider';


export default function Home() {
    return (
        <Container>
            <ImgSlider />

            <Row xs="1" md="2" className="g-4">
                <Col>
                    <Card style={{height: '100%', textAlign: 'justify'}} >
                        <Card.Header as="h5" className="myBackgroud1">Welcome To Gurukul Academy</Card.Header>
                        <Card.Body>
                            <Card.Text >
                                Gurukul Academy is located in Dehwa, Mohanlalganj, Lucknow. The school is affiliated to CBSE Board, New Delhi. The school began its journey in 2011 when it was imparting the education till standard VII . With the passage of time Gurukul Academy has shown its glory and has now reached the position of educating children upto standard XII with streams like Science, Commerce & Arts.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col>
                    <Card style={{height: '100%', textAlign: 'justify'}}>
                        <Card.Header as="h5" className="myBackgroud1">Principal's Message</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            The foremost aim of my school is to maintain high standard of education through incessant academic and administrative supervision by myself and industrious efforts of highly qualified dedicated and dynamic teacher for the holistic development of students.
                      
                         </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col>
                    <Card style={{height: '100%', textAlign: 'justify'}}>
                        <Card.Header as="h5" className="myBackgroud1">Our Learning Policy</Card.Header>
                        <Card.Body>
                            <Card.Text>
                           Our Learning policy is based on encouragement not enforcement. We have the trained, experienced and dedicated staff to encourage the students to learn rather than enforcing them, in order to make the learning procedure easy.
                         </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col>
                    <Card style={{height: '100%', textAlign: 'justify'}}>
                        <Card.Header as="h5" className="myBackgroud1">Vision & Mission</Card.Header>
                        <Card.Body>
                            <Card.Text>                   
                            Special emphasis is laid on holistic development, active and dynamic learning and teaching environment, opportunity to release students’ potential and achieve academic Excellence for complete development of students’ personality extra curricular activities are given special attention.  </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}