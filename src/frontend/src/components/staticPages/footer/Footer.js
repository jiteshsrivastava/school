import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <br />
      <footer className="bg-light">
        <div className="footer-copyright text-center py-2">
          © 2021 Copyright, &nbsp;
          <a href="https://gurukulacademylko.in/">www.gurukulacademylko.in </a>
        </div>
        <div>          
          <small>CBSE Affiliation Code : 2131810 & School Code : 70984</small>
        </div>
      </footer>
    </Container>
  );
}
