import Header from './Header';
import { Nav, Card } from 'react-bootstrap';
import Footer from './Footer';
import drImage from '../images/drimage.jpg';
import patient from '../images/patient.jpg';
import image from '../images/Mask Group 1.jpg'
import './Home.css';

const Home = () => {

    return (
        <div className='doctorHeading'>
            <Header />
            <div className='row mainBody'>
                    <div className="col-md-5">
                        <div className="doctorText">
                            <h1>Your Health Matters</h1>
                            <p>Oral health is a key indicator of overall health, well-being and quality of life. It encompasses a range of diseases and conditions that include dental caries, Periodontal disease, Tooth loss, Oral cancer, Oral manifestations of HIV infection, Oro-dental trauma, Noma and birth defects such as cleft lip and palate.</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="doctorImg">
                            <img src={image} alt="" />
                        </div>
                    </div>
            </div>
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
    )
}

export default Home;