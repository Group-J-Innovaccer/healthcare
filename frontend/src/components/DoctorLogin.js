import React from 'react'
import Header from './Header'

const DoctorLogin = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid" style={{
            width: "100%",
            height: "100vh",
            backgroundImage: "url('https://muslimaid.storage.googleapis.com/upload/img_cache/file-2540-c3140610843658e55343c899d6b4d6f5.jpg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div className="text-center p-4">
            <h1>Doctor Login</h1>
            </div>
            <div className="row ">
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form">
                                    <div className="controls">
                                        
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group"> <label htmlFor="form_d_email">Email ID *</label> <input id="form_d_email" type="email" name="d_email" className="form-control" placeholder="Email ID *" required="required" data-error="Email ID is required." /> </div>
                                            </div>

                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group"> <label htmlFor="form_d_pass">Password *</label> <input id="form_d_pass" type="password" name="d_pass" className="form-control" placeholder="Password *" required="required" data-error="Password is required." /> </div>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                        <center>
                                            <div className="col-md-12">
                                                <div className="form-group"> <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Login</button></div>
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
    </div>
    )
}

export default DoctorLogin
