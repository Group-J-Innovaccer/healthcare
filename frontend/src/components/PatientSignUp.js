import Header from './Header';
import Footer from './Footer';
import "./App.css";
import PatientDashboard from './PatientDashboard';


const PatientSignUp = () => (
    <div>
        <Header />

        <div class="container-fluid" style={{
            width: "100%",
            height: "200vh",
            backgroundImage: "url(" + "https://cutewallpaper.org/21/healthcare-wallpapers/Health-Care-Wallpapers-Top-Free-Health-Care-Backgrounds-.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div class="text-center p-5">
                <h1>Patient Registeration</h1>
            </div>
            <div class="row ">
                <div class="col-lg-8 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <form id="contact-form" role="form" action='PatientDashboard.js'>
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_id">Patient ID *</label> <input id="form_p_id" type="text" name="p_id" class="form-control" placeholder="Please enter your unique patient id no. *" required="required" data-error="Valid patient id is required." /> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_name">Name *</label> <input id="form_p_name" type="text" name="p_name" class="form-control" placeholder="Firstname Lastname*" required="required" data-error="Name is required." /> </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_dob">Date Of Birth *</label> <input id="form_dob" type="date" name="dob" class="form-control" placeholder="Please enter your Date of birth *" required="required" data-error="Date of birth is required." /> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_age">Age *</label> <input id="form_age" type="number" name="age" class="form-control" placeholder="Please enter your Age *" required="required" data-error="Age is required." /> </div>
                                            </div>
                                            </div>

                                            <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group "> <label for="form_gender">Gender *</label> 
                                                <select id="form_gender" class="form-control dropdown-toggle" placeholder='Choose Gender'>
                                                  
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                </select>
                                                 </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_p_mob_no">Mobile No. *</label> <input id="form_p_mob_no" type="tel" name="p_mobile_no" class="form-control" placeholder="Please enter your mobile no. *" required="required" data-error="Valid mobile number is required." /> </div>
                                            </div>

                                        </div>

                                


                                <div class="row">
                                    <div class="col-md-6">
                                     
<div class="form-group "> <label for="form_height">Height *</label> 

<input id="form_p_height" type="number" name="p_height" class="form-control" placeholder="Please enter your  height*" required="required" data-error="Patient height is required." /> 

{/* <div class="form-group "> <label for="form_height_unit">Unit *</label>
<select id="form_height" class="form-control dropdown-toggle" >
<option>cm</option>
<option>ft</option>
<option>in</option>
</select>
</div> */}
</div>
</div>

<div class="col-md-6">
<div class="form-group "> <label for="form_weight">Weight *</label> 

<input id="form_p_weight" type="number" name="p_weight" class="form-control" placeholder="Please enter your  weight*" required="required" data-error="Patient weight is required." /> 

{/* <select id="form_weight" class="form-control dropdown-toggle" >
<option>kg</option>
<option>lb</option>
</select>
</div> */}
</div>
</div>
</div>






                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_p_address">Address *</label> <textarea id="form_p_address" name="p_address" class="form-control" placeholder="Write your address here." rows="3" required="required" data-error="Address is required."></textarea> </div>
                                            </div>
                                        </div>

                                        
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_p_diagnosis">Diagnosis</label> <textarea id="form_p_diagnosis" name="p_diagnosis" class="form-control" placeholder="" rows="1" ></textarea> </div>
                                            </div>
                                        </div><br />


                                        <div class="row">
                                            <center>
                                                <div class="col-md-6">
                                                    <div class="form-group"> <button variant="outline-primary" onClick={<PatientDashboard />} style={{ width: "100%", height: "40px", backgroundColor: "#2a8fc7", border: "none", borderRadius: "20px", color: "white", fontWeight: "bolder" }}>Register</button></div>
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
            <div class="row" style={{ height: "10px" }}>

            </div>
        </div>
        <Footer />
    </div>
)

export default PatientSignUp;


