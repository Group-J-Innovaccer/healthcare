
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { doctordetail } from '../api/doc';
import Header from './Header';

const DoctorDashboard = ({ isAuthenticated, setIsAuthenticated }) => {

    const [doctorData, setDoctorData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await doctordetail();
                setDoctorData(res.data[0])

            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, []);
    
    if (!isAuthenticated) {
        console.log(isAuthenticated)
        return <Navigate to='/doctor_login' />
    }

    doctordetail();


    return (
        <div>
            <Header setIsAuthenticated={setIsAuthenticated}/>
            <div class="container-fluid" style={{
            width: "100%",
            height: "100vh",
            backgroundImage: "url('https://cutewallpaper.org/21/healthcare-wallpapers/Health-Care-Wallpapers-Top-Free-Health-Care-Backgrounds-.jpg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 


            <div className="text-center p-4">
            <h1>Welcome Dr. {doctorData.firstname}</h1>
            </div>
            
            <div className="container" style={{ display:"flex", justifyContent:"center"}}>
            <div className="card" style={{width: "40vw",height:"60vh"}}>
                <div className="card-body">
                <h6>Doctor ID : <b>{doctorData.id}</b></h6><br />
                <h6>Doctor Name : <b>{doctorData.firstname} {doctorData.lastname}</b></h6><br />
                <h6>Doctor Qualification : <b>{doctorData.qualification}</b></h6><br />
                <h6>Doctor Mobile No : <b>{doctorData.phone_no}</b></h6><br />
                </div>
            </div>
            <div className="card" style={{height:"60vh", width: "30vw"}}>
                <center><img src="https://st2.depositphotos.com/3474805/6536/v/600/depositphotos_65365277-stock-illustration-medic-doctor-circle-icon.jpg" alt="Card-cap"  style={{height:"100%", width:"100%"}}/></center>
                
            </div>
            </div>


            <div className="container p-4" style={{ display:"flex", justifyContent:"center"}}>
            <form id="contact-form" method="get" action="prescription">
                <div className="form-group"><button variant="outline-primary" style={{width:"50vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"5px", color:"white", fontWeight:"bolder"}}>Add Prescription</button></div>

                </form>
            </div>
            <div className="container p-2" style={{ display:"flex", justifyContent:"center"}}>
            <form id="contact-form" method="get" action="add_patient">
                <div className="form-group"><button variant="outline-primary" style={{width:"50vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"5px", color:"white", fontWeight:"bolder"}}>Add Patient</button></div>

                </form>
            </div>

        </div>
    </div>

    )
}

export default DoctorDashboard;