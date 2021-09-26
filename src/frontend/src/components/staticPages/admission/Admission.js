import { Container, Col, Card, Row, Button } from "react-bootstrap";

export default function Admission() {
	return (
		<Container>
			<div class="jumbotron">
				<h1 class="display-4">Admission</h1>
			</div>

			<Row xs="1" md="1" className="g-4">

				<Col>
					<Card>
						<Card.Header as="h5" className="myBackgroud1">Admission Procedure</Card.Header>
						<Card.Body>
							<p>For the pre Primary class (Play group, Nursery and kindergarten) no admission test will be conducted.</p>
							<p>For class I to XI the admission shall be made through an entrance test including a written and an interview.</p>
							<p>Parents/guardians are asked to fillup the admission form with the utmost accuracy.</p>
							<p>	Parents/guardians are asked to furnish the required documents with application form.</p>
						</Card.Body>
						<Card.Footer><Button href="document/admission.pdf" variant="primary">Download Admission Form</Button></Card.Footer>
					</Card>
				</Col>
				
			</Row>
		</Container>
	);
}