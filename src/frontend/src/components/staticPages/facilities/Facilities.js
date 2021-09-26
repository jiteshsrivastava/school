import { Container, Col, Card, Row, Carousel } from "react-bootstrap";

export default function Facilities() {
	return (
		<Container>
			<div class="jumbotron">
				<h1 class="display-4">Facilities</h1>
			</div>

			<Row xs="1" md="3" className="g-4">

				<Col>
					<Card>
						<Card.Header as="h5" className="myBackgroud1">Computer Lab</Card.Header>
						<Card.Body>
							<Carousel>
								<Carousel.Item>	<img className="d-block w-100" src="/images/computerImg1.jpg" alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src="/images/computerImg2.jpg" alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src="/images/computerImg3.jpg" alt="Second slide"/> </Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Header as="h5" className="myBackgroud1">Science Lab</Card.Header>
						<Card.Body>
							<Carousel>
								<Carousel.Item>	<img className="d-block w-100" src="/images/scienceImg2.jpg" alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src="/images/scienceImg2.jpg" alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src="/images/scienceImg3.jpg" alt="Second slide"/> </Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Header as="h5" className="myBackgroud1">Library</Card.Header>
						<Card.Body>
							<Carousel>
								<Carousel.Item>	<img className="d-block w-100" src="/images/libraryImg2.jpg" alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src="/images/libraryImg2.jpg" alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src="/images/libraryImg3.jpg" alt="Second slide"/> </Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}