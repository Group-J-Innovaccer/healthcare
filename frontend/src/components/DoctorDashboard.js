
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { doctordetail } from '../api/doc';
import Header from './Header';
import Footer from './Footer';

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
        return <Navigate to='/doctor_login' />
    }

    doctordetail();


    return (
        <div>
            <Header setIsAuthenticated={setIsAuthenticated}/>
            <div class="container-fluid" style={{
            width: "100%",
            height: "100vh",
            backgroundImage: "url('https://images.unsplash.com/photo-1611690828081-878ab4e8416d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=938&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
      }}> 


            <div className="text-center p-4">
            <h1>Welcome Dr. {doctorData.firstname}</h1>
            </div>
            
            <div className="container" style={{ display:"flex", justifyContent:"center"}}>
            <div className="card" style={{width: "35vw",height:"50vh", justifyContent:'center'}}>
                <div className="card-body"style={{padding:'20px'}}>
                    <br/><br/>
                <h6>Doctor ID : <b>{doctorData.id}</b></h6><br />
                <h6>Doctor Name : <b>{doctorData.firstname} {doctorData.lastname}</b></h6><br />
                <h6>Doctor Qualification : <b>{doctorData.qualification}</b></h6><br />
                <h6>Doctor Mobile No : <b>{doctorData.phone_no}</b></h6><br />

                </div>
            </div>
            <div className="card" style={{height:"50vh", width: "20vw", justifyContent:'center'}}>
                <center><img src="https://st2.depositphotos.com/3474805/6536/v/600/depositphotos_65365277-stock-illustration-medic-doctor-circle-icon.jpg" alt="Card-cap"  style={{height:"100%", width:"100%"}}/></center>
                
            </div>
            </div>


            <div className="container p-2" style={{ display:"flex", justifyContent:"center"}}>
            <form id="contact-form" method="get" action="prescription">
                <div className="form-group"><button variant="outline-primary" style={{width:"20vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"10px", color:"white", fontWeight:"bolder"}}>Add Prescription</button></div>

                </form>
            </div>
            <div className="container p-1" style={{ display:"flex", justifyContent:"center"}}>
            <form id="contact-form" method="get" action="add_patient">
                <div className="form-group"><button variant="outline-primary" style={{width:"20vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"10px", color:"white", fontWeight:"bolder"}}>Add Patient</button></div>

                </form>
            </div>

        </div>
        <Footer/>
    </div>

    )
}

export default DoctorDashboard;