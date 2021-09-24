import Button from "@restart/ui/esm/Button";
import { Card, CardGroup, Container } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container>
        <div class="jumbotron">
          <h1 class="display-4">Gurukul Academy</h1>
        </div>

        <Card > <Card.Body>
        <Card.Title className="bg-dark text-white">About the School</Card.Title>
          <Card.Text>
            Gurukul Academy is located in Dehwa, Mohanlalganj, Lucknow. The
            school is affiliated to CBSE Board, New Delhi. The school began its
            journey in 2011 when it was imparting the education till standard
            VII . With the passage of time Gurukul Academy has shown its glory
            and has now reached the position of educating children upto standard
            XII with streams like Science, Commerce & Arts.
          </Card.Text>
          </Card.Body>         
        </Card>
        <br /><br /><br /><br />
        <CardGroup>
        
          <Card>
            
            <Card.Body>
              <Card.Title className="bg-dark text-white">Vision & Mission</Card.Title>
              <Card.Text >
                To impart education affectionately to the largest possible
                number of students ,to liberate from narrow bookishness by
                providing individually comprehensive, Socially productive and
                morally conducive education. Special emphasis is laid on
                holistic development, active and dynamic learning and teaching
                environment, opportunity to release students’ potential and
                achieve academic Excellence for complete development of
                students’ personality extra curricular activities are given
                special attention.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}