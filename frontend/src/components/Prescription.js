import Header from './Header'
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Medication from './Medication';
import { doctordetail } from '../api/doc';
import { patientdata } from '../api/pat';
import { createMedication, createPrescription } from '../api/pres';
import CSRFToken from './CSRFToken';



const Prescription = ({ isAuthenticated, setIsAuthenticated }) => {

    const [doctorData, setDoctorData] = useState(false);
    const [patientData, setPatientData] = useState(false);
    const [addPrescription, setAddPrescription] = useState({
        patient_id: '',
        doctor_id: '',
        doctor_name: '',
        patient_name: '',
        chief_complain: '',
        diagnosis: '',
        examination: '',
        investigation: '',
        advice: '',
        comment: '',
    })

    const [addMedication, setAddMedication] = useState({
        prescrition_id: '',
        medication_item: '',
        strength: '',
        preparation: '',
        route: '',
        dose: '',
        direction: '',
        frequency: '',
        duration: '',
        total_quantity: '',
    })

    const [medications, setMedications] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await doctordetail(); 
                setDoctorData(res.data[0]) 
        
                console.log(doctorData)
                
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
        fetchPatient();
        
    }, []);
    


    const fetchPatient = async () => {
        const res = await patientdata();
        setPatientData(res.data)   
      
    }

    const handleChange = (event) => {
		setAddPrescription(addPrescription => ({
			...addPrescription,
			[event.target.name]: event.target.value
		}))
	}

    const sendMedications = async (med) => {
        console.log(med)
        const response = await createMedication(med);
        console.log(response)
    }
   
    const handleSubmit =  async (event) => {
        event.preventDefault();
        console.log('prevention.js')

        const patient_name = patientData.map(data => {
            if (parseInt(data.id) === parseInt(addPrescription.patient_id)) {
                return data.firstname + ' ' + data.lastname
            }
        })
      
         setAddPrescription(addPrescription => ({
			...addPrescription,
            doctor_id: doctorData.id,
            doctor_name: doctorData.firstname + ' ' + doctorData.lastname ,
            patient_name: patient_name[0]
		}))

        let form = addPrescription
        form.patient_name = patient_name[0]
        form.doctor_id = doctorData.id
        form.doctor_name = doctorData.firstname + ' ' + doctorData.lastname 
        console.log(form)
        const res = await createPrescription(form);
        if (res.status === 201) {
            console.log(res)
            console.log(medications)
            medications.forEach(medication => {
                medication.prescription_id = res.data.id
                sendMedications(medication);
            })
        } else {
            console.log(res)
        }
        
    }
           
    return (
        <div>
            <Header/>
            <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5be5e281a2772c7d09a59f72/1543717647231-K09VTNN3BGXZMEXNYIH7/blu.jpg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div className=" text-center p-4"   >
            <h1>Generate Prescription</h1>
            </div>
            
            <div className="row ">
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <CSRFToken />
                                    <button className="btn-primary mt-4" htmlFor="contact-form" style={{width:"100%", border:"3px solid blue", borderRadius:"5px"}} >Submit Prescription</button>

                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_id">Doctor ID : <b>{(doctorData) ? doctorData.id : ""}</b></label></div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_d_name">Doctor Name : <b>{(doctorData) ? doctorData.firstname + ' ' + doctorData.lastname : ""}</b></label></div>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            <label htmlFor="form_p_name">Patient Name :</label>
                                                <select name="patient_id" id="patientname" value={addPrescription.patient_id} onChange={handleChange}>
                                                    <option >Choose Patient</option>
                                                    {(patientData) ? patientData.map(patient => <option value={patient.id}>{patient.firstname} {patient.lastname}</option>) : ''}
                                                </select>
       
                                            </div>
                                        </div><br />
                                       
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_cc">Chief Complaints *</label> <textarea id="form_p_cc" name="chief_complain" className="form-control" placeholder="Patient's chief complaints *" rows="2" required="required" data-error="Patient's chief complaints is required." value={addPrescription.chief_complain} onChange={handleChange}></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_cf">Diagnosis *</label> <textarea id="form_p_cf" name="diagnosis" className="form-control" placeholder="Patient's Diagnosis *" rows="2" required="required" data-error="Patient's Diagnosis features is required." value={addPrescription.diagnosis} onChange={handleChange}></textarea> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_examination">Examination *</label> <textarea id="form_p_examination" name="examination" className="form-control" placeholder="Patient's examination *" rows="2" required="required" data-error="Patient's examination is required." value={addPrescription.examination} onChange={handleChange}></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_investigation">Investigations *</label> <textarea id="form_p_investigation" name="investigation" className="form-control" placeholder="Patient's investigations *" rows="2" required="required" data-error="Patient's investigations is required." value={addPrescription.investigation} onChange={handleChange}></textarea> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_advice">Advice/Referrals *</label> <textarea id="form_p_advice" name="advice" className="form-control" placeholder="Advice for patient *" rows="2" required="required" data-error="Advice for patient is required." value={addPrescription.advice} onChange={handleChange}></textarea> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_p_note">Notes *</label> <textarea id="form_p_note" name="comment" className="form-control" placeholder="Note for patient *" rows="2" required="required" data-error="Note for patient is required." value={addPrescription.comment} onChange={handleChange}></textarea> </div>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h5><b>Add Drug</b></h5>
                                    </div>
                                </div>

                                </form>
                                <Medication addMedication={addMedication} medications={medications} setMedications={setMedications} setAddMedication={setAddMedication} />


                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}

export default Prescription
