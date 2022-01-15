import React from 'react';
import Header from './Header';
import Footer from './Footer';
import button from 'react-bootstrap';
function DoctorRegister() {
    return (
        <div>
            <Header />
            <div class="container-fluid" style={{
            width: "100%",
            height: "100vh",
            backgroundImage: "url('https://images.unsplash.com/photo-1611689102033-7f9e0a8eb851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
      }}> 
            <div class="text-center p-4">
            <h1>Doctor Registeration</h1>
            </div>
            <div class="row "  style={{ borderRadius:'10px 10px 10px 10px'}}>
                <div class="col-lg-8 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light"  style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div class="card-body bg-light">
                            <div class="container">
                                <form id="contact-form">
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_d_id">Doctor ID *</label> <input id="form_d_id" type="text" name="d_id" class="form-control" placeholder="Please enter your unique doctor id no. *" required="required" data-error="Valid doctor id is required." /> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_d_name">Name *</label> <input id="form_d_name" type="text" name="d_name" class="form-control" placeholder="Dr. Firstname Lastname*" required="required" data-error="Name is required." /> </div>
                                            </div>
                                        </div><br />
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_qualification">Qualification *</label> <input id="form_qualification" type="text" name="qualification" class="form-control" placeholder="Please enter your qualification *" required="required" data-error="Qualification is required."/> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_d_mob_no">Mobile No. *</label> <input id="form_d_mob_no" type="tel" name="d_mobile_no" class="form-control" placeholder="Please enter your mobile no. *" required="required" data-error="Valid mobile number is required." /> </div>
                                            </div>

                                        </div><br />
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_d_address">Address *</label> <textarea id="form_d_address" name="d_address" class="form-control" placeholder="Write your address here." rows="4" required="required" data-error="Address is required."></textarea> </div>
                                            </div>
                                        </div><br />
                                        <div class="row">
                                        <center>
                                            <div class="col-md-6">
                                                <div class="form-group"> <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Register</button></div>
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
            <div class="row" style={{height:"10px"}}>

            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default DoctorRegister
