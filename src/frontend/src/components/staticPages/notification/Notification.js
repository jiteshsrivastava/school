import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import './notification.css';

export default function Notification() {
  return (

    <Container>
     <div class="jumbotron">
				<h1 class="display-4">Notifications</h1>
			</div>
      <Card>

        <Card.Header as="h5" className="myBackgroud1">Admission Notice</Card.Header>

        <Card.Body>
          <Card.Title>Admission is going on</Card.Title>
          <Card.Text>
            Hurry Up, few seats lefts , please contact @ 706 894 5088 to get admission.
    </Card.Text>
        </Card.Body>
      </Card>
      <p></p>
      <Card style={{ width: '100%' }}>
        <Card.Header as="h5" className="myBackgroud1" >Co-Curricular Activites</Card.Header>
        <Card.Body>

          <Card.Text>
            Throughout the year various activities will be organised by staff sometimes specialist mentors will be visiting the school to lead some activities.
    </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" >
          <ListGroupItem className="myBackgroud2">Dance</ListGroupItem>
          <ListGroupItem className="myBackgroud3">Music (Vocal & instrumental)</ListGroupItem>
          <ListGroupItem className="myBackgroud2">Panting art & craft</ListGroupItem>
          <ListGroupItem className="myBackgroud3">Gardening</ListGroupItem>
          <ListGroupItem className="myBackgroud2">Sports (Indoor and outdoor)</ListGroupItem>
          <ListGroupItem className="myBackgroud3">Yoga</ListGroupItem>
          <ListGroupItem className="myBackgroud2">Gymnastics</ListGroupItem>
        </ListGroup>
      </Card>
    </Container>
  );
}
