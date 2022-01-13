import Header from './Header';
import Footer from './Footer';
import "./App.css";

const Login = (setIsDoctor) => {

    return (
        <div>
            <Header />
            <div className="App">
      
      <div className="btn_container">
        <button
          className="btnDoctor"
          onClick={() => {
            setIsDoctor("Doctor");
          }}
        >
          <img src="/doctor.png" alt="doctor" className="btnlogo" />
          <p>Doctor</p>
        </button>
        <button
          className="btnPatient"
          onClick={() => {
            setIsDoctor("Patient");
          }}
        >
          <img src="/care.png" alt="patient" className="btnlogo" />
          <p>Patient</p>
        </button>
        <p className="sign_in">
          Don't you have a account yet? <br />
          Please <a href="/" >Sign in.</a>
        </p>
      </div>
    </div>
  
            <Footer />
        </div>
    )
}

export default Login;