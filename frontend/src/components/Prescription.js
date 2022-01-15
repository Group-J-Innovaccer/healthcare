import React, { useState, useEffect } from 'react';
import Header from './Header'
import Medication from './Medication';
import { Navigate } from 'react-router-dom';
import { eprescdetail } from '../api/presc';
import { patientdetail } from '../api/patient';


const Prescription = () => {

        const [doctorData, setDoctorData] = useState('');
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await eprescdetail();
                    setDoctorData(res.data[0])
                    
                } catch (err) {
                    console.log(err)
                }
            };
    
            fetchData();
        }, []);
        
        eprescdetail();


        const [patientData, setPatientData] = useState('');
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await patientdetail();
                    setPatientData(res.data[0])
                    
                } catch (err) {
                    console.log(err)
                }
            };
    
            fetchData();
        }, []);
        
        patientdetail();


    return (
        <div>
            <Header />
            {/* <Header setIsAuthenticated={setIsAuthenticated}/> */}
            <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5be5e281a2772c7d09a59f72/1543717647231-K09VTNN3BGXZMEXNYIH7/blu.jpg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div className=" text-center p-4">
            <h1>Generate Prescription</h1>
            </div>
            
            <div className="row ">
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form" type="submit" method="post" action="">
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_id">Doctor ID : <b>{doctorData.id}</b></label></div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_name">Doctor Name : <b>{doctorData.firstname}</b></label></div>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_id">Patient ID : <b>{patientData.id}</b></label></div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_name">Patient Name : <b>{patientData.firstname}</b></label></div>
                                            </div>
                                        </div><br />
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_id">Patient's ID  : <b>{patientData.id}</b></label> 
                                                <input id="form_p_id" type="text" name="p_id" className="form-control" placeholder="Patient's ID*" required="required" data-error="Patient's id is required." /> 
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_name">Patient's Name  : <b>{patientData.firstname}</b> </label>
                                                 <input id="form_p_name" type="text" name="p_name" className="form-control" placeholder="Patient's Name*" required="required" data-error="Patient's name is required." /> 
                                                </div>
                                            </div>
                                        </div> */}
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_cc">Chief Complaints *</label> <textarea id="form_p_cc" name="p_cc" className="form-control" placeholder="Patient's chief complaints *" rows="2" required="required" data-error="Patient's chief complaints is required."></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_cf">Clinical Features *</label> <textarea id="form_p_cf" name="p_cf" className="form-control" placeholder="Patient's clinical features *" rows="2" required="required" data-error="Patient's clinical features is required."></textarea> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_examination">Examination *</label> <textarea id="form_p_examination" name="p_examination" className="form-control" placeholder="Patient's examination *" rows="2" required="required" data-error="Patient's examination is required."></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_investigation">Investigations *</label> <textarea id="form_p_investigation" name="p_investigation" className="form-control" placeholder="Patient's investigations *" rows="2" required="required" data-error="Patient's investigations is required."></textarea> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_advice">Advice/Referrals *</label> <textarea id="form_p_advice" name="p_advice" className="form-control" placeholder="Advice for patient *" rows="2" required="required" data-error="Advice for patient is required."></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_note">Notes *</label> <textarea id="form_p_note" name="p_note" className="form-control" placeholder="Note for patient *" rows="2" required="required" data-error="Note for patient is required."></textarea> </div>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                        <center>
                                            {/* <div className="col-md-6">
                                                <div className="form-group"> <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Add Drug</button></div>
                                            </div> */}
                                        </center>
                                        </div>
                                        
                                    </div>

                                </form>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h5><b>Add Drug</b></h5>
                                    </div>
                                </div>
                                <Medication />
                                <button className="btn-primary mt-4" htmlFor="contact-form" style={{width:"100%", border:"3px solid blue", borderRadius:"5px"}}>Submit Prescription</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}

export default Prescription
