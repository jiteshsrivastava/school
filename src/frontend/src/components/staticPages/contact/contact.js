import { Container } from "react-bootstrap";

const ContactPage = () => {
	return (
		<Container>
			 <div class="jumbotron">
       			<h1 class="display-4">Contact Us</h1>
      		</div>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col">
					<div className="card">						
						<div className="card-body">
							<h5 className="card-title">Address</h5>
							<p className="card-text">Dehwa Mohanlalganj, Lucknow Uttar Pradesh 226301</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">						
						<div className="card-body">
							<h5 className="card-title">Email</h5>
							<p className="card-text">Support@gurukulacademylko.in</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">						
						<div className="card-body">
							<h5 className="card-title">Phone</h5>
							<p className="card-text">(+91) 706 894 5088</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default ContactPage;