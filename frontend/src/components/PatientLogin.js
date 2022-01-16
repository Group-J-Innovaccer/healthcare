import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import "./App.css";
import { login } from '../api/auth_patient';
import { Navigate } from 'react-router-dom';
import CSRFToken from './CSRFToken';

const PatientLogin = ({isAuthenticated, setIsAuthenticated}) =>{

    const [formData,setFormData] = useState({
        patient_id:'',
        secret_key:''
    });

    const [patientId,setPatientId] = useState(false)

    const handleChange = (event) =>{
        setFormData(formData =>({
            ...formData,
            [event.target.name]:event.target.value
        }));
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const form = {'patient_id':parseInt(formData.patient_id),'secret_key':formData.secret_key}
        const res = await login(form);
        console.log(res)
        if(!res.data.error){
            console.log(res.data)
            localStorage.setItem("PatientData",res.data[0])
            setPatientId(localStorage.getItem("PatientData"))
        }
        
    }

    if(patientId){
        return <Navigate to='/viewprescription'/>
    }


    return(
        <div>
            <Header />

            <div className="container-fluid" style={{
                width: "100%",
                height: "110vh",
                backgroundImage: "url('https://muslimaid.storage.googleapis.com/upload/img_cache/file-2540-c3140610843658e55343c899d6b4d6f5.jpg')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}> 

                <div className="text-center p-3">
                    <h1>Patient Login</h1>
                </div>

                <div className="row ">
                    <div className="col-lg-8 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container">
                                    <form id="contact-form" onSubmit={handleSubmit}>
                                        <CSRFToken/>
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> 
                                                        <label htmlFor="form_p_id">Patient ID *</label> 
                                                        <input id="form_p_id" type="text" name="patient_id" className="form-control" placeholder="Please enter your unique patient id no. *" required="required" value={formData.patient_id} onChange={handleChange} data-error="Valid patient id is required." /> 
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group"> 
                                                        <label htmlFor="form_p_secretkey">Secret Key *</label> 
                                                        <input id="form_p_secretkey" type="password" name="secret_key" className="form-control" placeholder="Secret Key *" required="required" value={formData.secret_key} onChange={handleChange} data-error="Secret Key is required." /> 
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <center>
                                                    <div className="col-md-12">
                                                        <div className="form-group"> 
                                                            <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}} >View Details</button>
                                                        </div>
                                                    </div>
                                                </center>
                                            </div>
                                        
                                        </div>
                                    </form>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{height:"10px"}}>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PatientLogin;

