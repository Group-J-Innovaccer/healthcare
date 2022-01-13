import React from 'react'
import Header from './Header'

function Doctor_login() {
    return (
        <div>
            <Header />
            <div class="container-fluid" style={{
            width: "100%",
            height: "100vh",
            backgroundImage: "url(" + "https://muslimaid.storage.googleapis.com/upload/img_cache/file-2540-c3140610843658e55343c899d6b4d6f5.jpg" + ")",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div class="text-center p-4">
            <h1>Doctor Login</h1>
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
                                                <div class="form-group"> <label for="form_d_id">Doctor ID *</label> <input id="form_d_id" type="text" name="d_id" class="form-control" placeholder="Please enter your unique doctor id no. *" required="required" data-error="Valid doctor id is required." /> </div>
                                            </div>
                                            
                                        </div><br />
                                        
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_d_name">Name *</label> <input id="form_d_name" type="text" name="d_name" class="form-control" placeholder="Dr. Firstname Lastname *" required="required" data-error="Name is required." /> </div>
                                            </div>

                                        </div><br />
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> <label for="form_d_pass">Password *</label> <input id="form_d_pass" type="password" name="d_pass" class="form-control" placeholder="Password *" required="required" data-error="Password is required." /> </div>
                                            </div>
                                        </div><br />
                                        <div class="row">
                                        <center>
                                            <div class="col-md-12">
                                                <div class="form-group"> <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Login</button></div>
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
    </div>
    )
}

export default Doctor_login
