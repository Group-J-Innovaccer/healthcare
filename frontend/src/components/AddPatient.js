import Header from './Header';
import Footer from './Footer';
import "./App.css";

const AddPatient = () => (
    <div>
        <Header />

        <div className="container-fluid" style={{
            width: "100%",
            height: "180vh",
            backgroundImage: "url('https://cutewallpaper.org/21/healthcare-wallpapers/Health-Care-Wallpapers-Top-Free-Health-Care-Backgrounds-.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="text-center p-5">
                <h1>Add Patient</h1>
            </div>
            <div className="row ">
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form" action='PatientDashboard.js'>
                                    <div className="controls">

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> 
                                                    <label for="form_p_fname">Firstname *</label> 
                                                    <input id="form_p_fname" type="text" name="p_fname" className="form-control" placeholder="Please enter your Firstname *" required="required" data-error="Firstname is required." /> 
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group"> 
                                                    <label for="form_p_lname">Lastname *</label> 
                                                    <input id="form_p_lname" type="text" name="p_lname" className="form-control" placeholder="Lastname*" required="required" data-error="Lastname is required." /> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> 
                                                    <label for="form_dob">Date Of Birth *</label> 
                                                    <input id="form_dob" type="date" name="dob" className="form-control" placeholder="Please enter your Date of birth *" required="required" data-error="Date of birth is required." /> 
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="form_email">Email *</label> 
                                                    <input id="form_email" type="email" name="p_email" className="form-control" placeholder="Please enter your Email *" required="required" data-error="Email is required." /> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                     <label for="form_gender">Gender *</label> 
                                                    <select id="form_gender" className="form-control dropdown-toggle" placeholder='Choose Gender'>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> 
                                                    <label for="form_p_mob_no">Mobile No. *</label>
                                                    <input id="form_p_mob_no" type="tel" name="p_mobile_no" className="form-control" placeholder="Please enter your mobile no. *" required="required" data-error="Valid mobile number is required." />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group "> 
                                                    <label for="form_height">Height (in Cm) *</label> 
                                                    <label for="form_height">Height *</label> 
                                                    <input id="form_p_height" type="number" name="p_height" className="form-control" placeholder="Please enter your  height*" required="required" data-error="Patient height is required." /> 
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                    <input id="form_p_weight" type="number" name="p_weight" className="form-control" placeholder="Please enter your  weight*" required="required" data-error="Patient weight is required." /> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label for="form_p_address">Address *</label>
                                                    <textarea id="form_p_address" name="p_address" className="form-control" placeholder="Write your address here." rows="3" required="required" data-error="Address is required."></textarea> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <center>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <button variant="outline-primary" style={{ width: "100%", height: "40px", backgroundColor: "#2a8fc7", border: "none", borderRadius: "20px", color: "white", fontWeight: "bolder" }}>Add Patient</button>
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
            
            <div className="row" style={{ height: "10px" }}>
            </div>
        </div>
        <Footer />
    </div>
)

export default AddPatient;


