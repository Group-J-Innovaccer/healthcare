import React from 'react'
import Header from './Header'

function Doctor_dashboard() {
    return (
        <div>
            <Header />
            <div className="container-fluid" style={{
            width: "100%",
            height: "100vh",
            backgroundImage: "url(" + "https://cutewallpaper.org/21/healthcare-wallpapers/Health-Care-Wallpapers-Top-Free-Health-Care-Backgrounds-.jpg" + ")",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div className="text-center p-4">
            <h1>Welcome Doctor_name</h1>
            </div>
            
            <div className="container" style={{ display:"flex", justifyContent:"center"}}>
            <div className="card" style={{width: "40vw",height:"60vh"}}>
                <div className="card-body">
                <h6>Doctor ID : <b>d_id</b></h6><br />
                <h6>Doctor Name : <b>d_name</b></h6><br />
                <h6>Doctor Qualification : <b>d_qualification</b></h6><br />
                <h6>Doctor Mobile No : <b>d_mob_no</b></h6><br />
                <form method="get" action="doctor_login">
                <button variant="outline-primary" style={{width:"50%", height:"7vh", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Logout</button>
                </form>
                </div>
            </div>
            <div className="card" style={{height:"60vh", width: "30vw"}}>
                <center><img src="https://st2.depositphotos.com/3474805/6536/v/600/depositphotos_65365277-stock-illustration-medic-doctor-circle-icon.jpg" alt="Card image cap"  style={{height:"100%", width:"100%"}}/></center>
                
            </div>
            </div>
            <div className="container p-4" style={{ display:"flex", justifyContent:"center"}}>
            <form id="contact-form" role="form" method="get" action="prescription">
                <div className="form-group"><button variant="outline-primary" style={{width:"50vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"5px", color:"white", fontWeight:"bolder"}}>Add Prescription</button></div>

                </form>
            </div>
            <div className="container p-2" style={{ display:"flex", justifyContent:"center"}}>
            <form id="contact-form" role="form" method="get" action="add_patient">
                <div className="form-group"><button variant="outline-primary" style={{width:"50vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"5px", color:"white", fontWeight:"bolder"}}>Add Patient</button></div>

                </form>
            </div>

        </div>
    </div>

    )
}

export default Doctor_dashboard
