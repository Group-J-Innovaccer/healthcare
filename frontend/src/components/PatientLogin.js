import Header from './Header';
import Footer from './Footer';
import "./App.css";

const PatientLogin = () =>{
    return(
        <div>
        <Header />

        <div class="container-fluid" style={{
            width: "100%",
            height: "110vh",
            backgroundImage: "url('https://muslimaid.storage.googleapis.com/upload/img_cache/file-2540-c3140610843658e55343c899d6b4d6f5.jpg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div class="text-center p-3">
            <h1>Patient Login</h1>
            </div>
            <div class="row ">
                <div class="col-lg-8 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <form id="contact-form">
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_p_id">Patient ID *</label> <input id="form_p_id" type="text" name="p_id" class="form-control" placeholder="Please enter your unique patient id no. *" required="required" data-error="Valid patient id is required." /> </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_p_name">Name *</label> <input id="form_p_name" type="text" name="p_name" class="form-control" placeholder=" Firstname Lastname *" required="required" data-error="Name is required." /> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_p_secretkey">Secret Key *</label> <input id="form_p_secretkey" type="password" name="p_secretkey" class="form-control" placeholder="Secret Key *" required="required" data-error="Secret Key is required." /> </div>
                                            </div>
                                        </div><br />
                                        <div class="row">
                                        <center>
                                            <div class="col-md-12">
                                                <div class="form-group"> <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>View Details</button></div>
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
<Footer />
</div>
    );
}

export default PatientLogin;

