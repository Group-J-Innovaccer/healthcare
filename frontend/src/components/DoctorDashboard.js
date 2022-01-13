import React from 'react'
import Header from './Header'

function DoctorDashboard() {
    return (
        <div>
            <Header />
            <div class="container-fluid" style={{
            width: "100%",
            height: "100vh",
            backgroundImage: "url('https://cutewallpaper.org/21/healthcare-wallpapers/Health-Care-Wallpapers-Top-Free-Health-Care-Backgrounds-.jpg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div class="text-center p-4">
            <h1>Welcome Doctor_name</h1>
            </div>
            
            <div class="container" style={{ display:"flex", justifyContent:"center"}}>
            <div class="card" style={{width: "40vw",height:"60vh"}}>
                <div class="card-body">
                <h6>Doctor ID : <b>d_id</b></h6><br />
                <h6>Doctor Name : <b>d_name</b></h6><br />
                <h6>Doctor Qualification : <b>d_qualification</b></h6><br />
                <h6>Doctor Mobile No : <b>d_mob_no</b></h6><br />
                
                <form id="contact-form">
                <div class="form-group"> <button variant="outline-primary" style={{width:"50%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Logout</button></div>

                </form>
                </div>
            </div>
            <div class="card" style={{height:"60vh", width: "30vw"}}>
                <center><img src="https://st2.depositphotos.com/3474805/6536/v/600/depositphotos_65365277-stock-illustration-medic-doctor-circle-icon.jpg" alt="Card-cap"  style={{height:"100%", width:"100%"}}/></center>
                
            </div>
            </div>
            <div class="container p-4" style={{ display:"flex", justifyContent:"center"}}>
            <form id="contact-form"  method="get" action="prescription">
                <div class="form-group"><button variant="outline-primary" style={{width:"50vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"5px", color:"white", fontWeight:"bolder"}}>Add Prescription</button></div>

                </form>
            </div>
            <div class="container p-2" style={{ display:"flex", justifyContent:"center"}}>
            <form id="contact-form" method="get" action="add_patient">
                <div class="form-group"><button variant="outline-primary" style={{width:"50vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"5px", color:"white", fontWeight:"bolder"}}>Add Patient</button></div>

                </form>
            </div>

        </div>
    </div>

    )
}

export default DoctorDashboard
