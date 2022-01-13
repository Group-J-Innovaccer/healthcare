import Header from './Header';
import { Nav, Card } from 'react-bootstrap';
import Footer from './Footer';
import drImage from '../images/drimage.jpg';
import patient from '../images/patient.jpg';
import './Home.css';

const Home = () => {

    return (
        <div><div className='doctorHeading'>
            <Header />
            <div className="ourDoctors" >
                <div>
                    <div className="ourDoctorsDetails">
                        <a href='#'><Card >
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <h5>Doctor</h5>
                                
                            </div>
                        </Card></a>
                        <a href='#'><Card>
                            <img style={{ height: "300px" }} src={patient} alt="" />
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