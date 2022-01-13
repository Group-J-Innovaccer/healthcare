import Header from './Header';
import { Nav, Card } from 'react-bootstrap';
import Footer from './Footer';
import BannerImg from '../images/Mask Group 4.jpg'
import drImage from '../images/drimage.jpg';
import patient from '../images/patient.jpg';
import './Home.css';

const Home = () => {

    return (
        <div>
            <Header />
            <div className='doctorHeading'>
            <section className="banner-section">
			<div className="container">
				<div className="row align-items-center" style={{ height: '100vh' }}>
					<div className="col-md-4">
						<h2>
							Your Health Matters...
						</h2>
						<p className="my-4" style={{ fontSize:'22px'}}>
                            We are here to ensure fast and accurate medical care for you. Your prescription are safely stored and they help the doctors to provide you get all kinds of health related services with accurate consultation.
						</p>
					</div>
					<div className="col-md-6 d-none d-md-block offset-1">
						<img className="img" src={BannerImg} alt="banner-img" width="100%"/>
					</div>
				</div>
			</div>
		    </section>
            <div className="ourDoctors" >
                <div>
                    <div className="ourDoctorsDetails">
                        <a href="/doctorlogin" style={{ borderRadius: "15px"}}><Card>
                            <img style={{ height: "300px"}} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <h5>Doctor</h5>
                            </div>
                        </Card></a>
                        <a href="/patientlogin"  style={{ borderRadius: "15px"}}><Card>
                            <img style={{ height: "300px"}} src={patient} alt="" />
                            <div className="doctorsInfo">
                                <h5>Patient</h5>
                            </div>
                        </Card></a> 
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;