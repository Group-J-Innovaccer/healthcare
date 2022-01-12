import Header from './Header';
import Footer from './Footer';

const PatientSignUp = () => {

    return (
        <div>
            <Header />
            
            <div>
            <label>First Name</label>
                <input type="text" placeholder="First Name" required maxLength="128" id="patientFirstname"></input>
               
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" required maxLength="128" id="patientLastname"></input>
                
                <br></br>
                <label>Email</label>
                <input type="email" placeholder='Email' required maxLength="130" id='patientEmail'></input>
                
                <label>Date of Birth</label>
                <input type="date" placeholder='Date of birth' ></input>

                <label>Height</label>
                <input type="number" placeholder='Height' required></input>
                <span></span>
                <select placeholder='Unit'>
                    <option>cm</option>
                    <option>ft</option>
                    <option>in</option>
                </select>

                <label>Weight</label>
                <input type="number" placeholder='Weight' required></input>
            </div>

            <Footer />
        </div>
    )
}

export default PatientSignUp;