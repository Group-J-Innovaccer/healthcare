import React from 'react'
import Header from './Header'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Prescription() {
    return (
        <div>
            <Header />
            <div class="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url(" + "https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" + ")",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div class=" text-center p-4">
            <h1>Generate Prescription</h1>
            <h4>Who are you?</h4>
            </div>
            <div class="row ">
                <div class="col-lg-8 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <form id="contact-form" role="form">
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_d_name">Name *</label> <input id="form_d_name" type="text" name="d_name" class="form-control" placeholder="Dr. Firstname Lastname*" required="required" data-error="Name is required." /> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_qualification">Qualification *</label> <input id="form_qualification" type="text" name="qualification" class="form-control" placeholder="Please enter your qualification *" required="required" data-error="Qualification is required."/> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_d_address">Address *</label> <textarea id="form_d_address" name="d_address" class="form-control" placeholder="Write your address here." rows="4" required="required" data-error="Address is required."></textarea> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_reg_no">Registration No. *</label> <input id="form_reg_no" type="text" name="registration_no" class="form-control" placeholder="Please enter your registration no. *" required="required" data-error="Valid registration number is required." /> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_d_mob_no">Mobile No. *</label> <input id="form_d_mob_no" type="tel" name="d_mobile_no" class="form-control" placeholder="Please enter your mobile no. *" required="required" data-error="Valid mobile number is required." /> </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" text-center mt-5 ">
            <h4>Patient details</h4>
            </div>
            <div class="row ">
                <div class="col-lg-8 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <form id="contact-form" role="form">
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_p_name">Patient's Name *</label> <input id="form_p_name" type="text" name="p_name" class="form-control" placeholder="Patient's Name*" required="required" data-error="Patient's name is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_dob">Date Of Birth *</label> <input id="form_p_dob" type="date" name="p_dob" class="form-control" placeholder="Patient's Date Of Birth*" required="required" data-error="Patient's dob is required." /> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_age">Age *</label> <input id="form_p_age" type="number" name="p_age" class="form-control" placeholder="Patient's Age *" required="required" data-error="Patient's age is required."/> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_gender">Gender *</label> <select id="form_p_gender" name="p_gender" class="form-control" required="required" data-error="Please specify patient's gender.">
                                                        <option value="" selected disabled>--Gender--</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Other</option>
                                                    </select> 
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_mob">Mobile No. *</label> <input id="form_p_mob" type="tel" name="p_mob" class="form-control" placeholder="Patient's Mobile *" required="required" data-error="Patient's mobile no. is required."/> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_p_address">Address *</label> <textarea id="form_p_address" name="p_address" class="form-control" placeholder="Patient's address *" rows="4" required="required" data-error="Patient's address is required."></textarea> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group"> <label for="form_p_height">Height *</label> <input id="form_p_height" type="number" name="p_height" class="form-control" placeholder="Patient's Height*" required="required" data-error="Patient's height is required." /> </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group"> <label for="form_p_h_unit">Unit *</label> <select id="form_p_h_unit" name="p_h_unit" class="form-control" required="required" data-error="Please specify patient's height unit.">
                                                        <option value="" selected disabled>--Unit--</option>
                                                        <option>cm</option>
                                                        <option>ft</option>
                                                        <option>in</option>
                                                    </select> 
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group"> <label for="form_p_weight">Weight *</label> <input id="form_p_weight" type="number" name="p_weight" class="form-control" placeholder="Patient's Weight*" required="required" data-error="Patient's weight is required." /> </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group"> <label for="form_p_w_unit">Unit *</label> <select id="form_p_w_unit" name="p_w_unit" class="form-control" required="required" data-error="Please specify patient's weight unit.">
                                                        <option value="" selected disabled>--Unit--</option>
                                                        <option>kg</option>
                                                        <option>lb</option>
                                                    </select> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_p_diag">Diagnosis *</label> <textarea id="form_p_diag" name="p_diag" class="form-control" placeholder="Patient's diagnosis *" rows="4" required="required" data-error="Patient's diagnosis is required."></textarea> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_cc">Chief Complaints *</label> <textarea id="form_p_cc" name="p_cc" class="form-control" placeholder="Patient's chief complaints *" rows="2" required="required" data-error="Patient's chief complaints is required."></textarea> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_cf">Clinical Features *</label> <textarea id="form_p_cf" name="p_cf" class="form-control" placeholder="Patient's clinical features *" rows="2" required="required" data-error="Patient's clinical features is required."></textarea> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_examination">Examination *</label> <textarea id="form_p_examination" name="p_examination" class="form-control" placeholder="Patient's examination *" rows="2" required="required" data-error="Patient's examination is required."></textarea> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_investigation">Investigations *</label> <textarea id="form_p_investigation" name="p_investigation" class="form-control" placeholder="Patient's investigations *" rows="2" required="required" data-error="Patient's investigations is required."></textarea> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_advice">Advice/Referrals *</label> <textarea id="form_p_advice" name="p_advice" class="form-control" placeholder="Advice for patient *" rows="2" required="required" data-error="Advice for patient is required."></textarea> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_note">Notes *</label> <textarea id="form_p_note" name="p_note" class="form-control" placeholder="Note for patient *" rows="2" required="required" data-error="Note for patient is required."></textarea> </div>
                                            </div>
                                        </div><br />
                                        <div class="row">
                                        <center>
                                            <div class="col-md-6">
                                                <div class="form-group"> <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Add Drug</button></div>
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


            </div>
        </div>
    )
}

export default Prescription
