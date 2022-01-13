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
            <div className="ourDoctors">
                <div>
                    <div className="ourDoctorsDetails">
                        <a href='#'><Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Doctor</p>
                                
                            </div>
                        </Card></a>
                        <a href='#'><Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={patient} alt="" />
                            <div className="doctorsInfo">
                                <p>Patient</p>
                                
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