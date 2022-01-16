import React ,{useState,useEffect} from 'react';
import Header from './Header';
import "./App.css";
//import img from './images/pr'

import { prescriptiondetail,medicationdetail } from '../api/pres';
import Cookies from 'js-cookie';




const ViewPrescription = () =>{
    const [prescriptionData,setPrescriptionData] = useState(false)
    const [medicationData,setMedicationData] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const prescription = await prescriptiondetail(localStorage.getItem('patientData'))
                const medication = await medicationdetail(prescription.data[0].id)
                console.log(prescription)
                console.log(medication)
                setPrescriptionData(prescription.data[0])
                setMedicationData(medication.data)
                console.log(prescriptionData)
                console.log(medicationData)
            } catch (err) {
                console.log(err)

            }
        };

        fetchData();
        
    }, []);

  

    

    return (
        
        <div>
            <Header />
            <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://healthcareacademycalifornia.com/wp-content/uploads/2018/11/Free-Downlaod-Light-Blue-Wallpaper-HD.jpeg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div className=" text-center p-4">
            <h1>Prescriptions</h1>
            </div>
            
            <div className="row ">
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                {/* <form id="contact-form" type="submit" role="form" method="post" action=""> */}
                                    <div className="controls">
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                Doctor ID : <b>{(prescriptionData) ? prescriptionData.doctor_id : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                                Doctor Name : <b>{(prescriptionData) ? prescriptionData.doctor_name : ""}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Patient's ID : <b>{(prescriptionData) ? prescriptionData.patient_id : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Patient's Name : <b>{(prescriptionData) ? prescriptionData.patient_name : ""}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Chief Complaints : <b>{(prescriptionData) ? prescriptionData.chief_complain : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Clinical Features : <b>{(prescriptionData) ? prescriptionData.doctor_id : ""}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Examination : <b>{(prescriptionData) ? prescriptionData.examination : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Investigations : <b>{(prescriptionData) ? prescriptionData.investigation : ""}</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Advice/Referrals : <b>{(prescriptionData) ? prescriptionData.advice : ""}</b>
                                            </div>
                                            <div className="col-md-6">
                                            Notes : <b>{(prescriptionData) ? prescriptionData.comment : ""}</b>
                                            </div>
                                        </div><br /><br />
                                        
                                        <div className="row">
                                        <center>
                                            
                                        </center>
                                        </div>
                                        
                                    </div>

                                {/* </form> */}

                                {(medicationData) ? medicationData.map(medication => {
                
                                    return (
                                        <div  className=" text-center p-4">
                                            <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h5><b>Drugs</b></h5>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Medicine : <b>{medication.medication_item}</b>
                                    </div>
                                    <div className="col-md-6">
                                        Strength : <b>{medication.strength}</b>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Preparation : <b>{medication.preparation}</b>
                                    </div>
                                    <div className="col-md-6">
                                        Route : <b>{medication.route}</b>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Dosage : <b>{medication.dose}</b>
                                    </div>
                                    <div className="col-md-6">
                                        Direction : <b>{medication.direction}</b>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Frequency : <b>{medication.frequency}</b>
                                    </div>
                                    <div className="col-md-6">
                                        Duration : <b>{medication.duration}</b>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Total Quantity : <b>{medication.total_quantity}</b>
                                    </div>
                                </div><br />
                                        </div>
                                    )
                                }) : ""}
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            


            </div>
        </div>

    )
}

export default ViewPrescription

