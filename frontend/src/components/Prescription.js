import React from 'react'
import Header from './Header'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Medication from './Medication';

function Prescription() {
    return (
        <div>
            <Header />
            <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url(" + "https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" + ")",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div className=" text-center p-4">
            <h1>Generate Prescription</h1><br />
            <h4>Patient details</h4>
            </div>
            
            <div className="row ">
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form" type="submit" role="form" method="post" action="medication">
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_id">Doctor ID : <b>d_id</b></label></div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_name">Doctor Name : <b>d_name</b></label></div>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_id">Patient's ID *</label> <input id="form_p_id" type="text" name="p_id" className="form-control" placeholder="Patient's ID*" required="" data-error="Patient's id is required." /> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_name">Patient's Name *</label> <input id="form_p_name" type="text" name="p_name" className="form-control" placeholder="Patient's Name*" required="" data-error="Patient's name is required." /> </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_cc">Chief Complaints *</label> <textarea id="form_p_cc" name="p_cc" className="form-control" placeholder="Patient's chief complaints *" rows="2" required="" data-error="Patient's chief complaints is required."></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_cf">Clinical Features *</label> <textarea id="form_p_cf" name="p_cf" className="form-control" placeholder="Patient's clinical features *" rows="2" required="" data-error="Patient's clinical features is required."></textarea> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_examination">Examination *</label> <textarea id="form_p_examination" name="p_examination" className="form-control" placeholder="Patient's examination *" rows="2" required="" data-error="Patient's examination is required."></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_investigation">Investigations *</label> <textarea id="form_p_investigation" name="p_investigation" className="form-control" placeholder="Patient's investigations *" rows="2" required="" data-error="Patient's investigations is required."></textarea> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_advice">Advice/Referrals *</label> <textarea id="form_p_advice" name="p_advice" className="form-control" placeholder="Advice for patient *" rows="2" required="" data-error="Advice for patient is required."></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_note">Notes *</label> <textarea id="form_p_note" name="p_note" className="form-control" placeholder="Note for patient *" rows="2" required="" data-error="Note for patient is required."></textarea> </div>
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
