import React, { useState } from 'react';


const  Medication = () => {

	const [medications, setMedications] = useState([])
	const [medication, setMedication] = useState(
		{
		'medication_name': '',

		'strength': '',
		'preparation': null,
		'route':null,
		'dosage': '',
		'direction': null,
		'freq': null,
		'duration': '',
		'total_quant':''
	});
	
	const handleChange = (event) => {
		setMedication(medication => ({
			...medication,
			[event.target.name]: event.target.value
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setMedications(medications => [...medications, medication])
		setMedication({
			'medication_name': '',

			'strength': '',
			'preparation': null,
			'route':null,
			'dosage': '',
			'direction': null,
			'freq': null,
			'duration': '',
			'total_quant':''
		})
        // console.log(medication)
	}
    const handleDelete = (med1) => {
        console.log(med1)
        setMedications(medications.filter((e)=>{
			return e!==med1;
		}))
	}

	return (
		<div>

			
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-md-6">
					<input type='text' name='medication_name' placeholder='Medication Name' value={medication.medication_name} onChange={handleChange}  required="required"  style={{width:"100%"}} />
					</div>
					<div className="col-md-6">
					<input type='text' name='strength' placeholder='Strength' value={medication.strength} onChange={handleChange} style={{width:"100%"}}  required="required" />
					</div>
                </div><br />
				<div className="row">
					<div className="col-md-6">
					<select type='' placeholder='Preparation' name='preparation' onChange={handleChange} required="required"   style={{height:"100%", width:"100%", borderRadius:"5px"}}>
					<option >Preparation</option>
					<option value={medication.preparation} >Tablets</option>
					<option value={medication.preparation} >Capsule</option>
					<option value={medication.preparation} >Injection</option>
					<option value={medication.preparation} >Syrup</option>
					<option value={medication.preparation} >Drops</option>
					</select>
					</div>
					<div className="col-md-6">
					<select type='' placeholder='Route' name='route' onChange={handleChange}  required="required"  style={{height:"100%", width:"100%", borderRadius:"5px"}}>
					<option >Route</option>
					<option value={medication.route} >Topical</option>
					<option value={medication.route} >Oral</option>
					<option value={medication.route} >Rectal</option>
					<option value={medication.route} >Vaginal</option>
					<option value={medication.route} >Inhalation</option>
					<option value={medication.route} >Local</option>
					<option value={medication.route} >Chew</option>
					<option value={medication.route} >Intradermal</option>
					<option value={medication.route} >Subcutanous</option>
					<option value={medication.route} >Intramuscular</option>
					<option value={medication.route} >Intravenous</option>
					<option value={medication.route} >Nasal</option>
					<option value={medication.route} >Ear Drops</option>
					<option value={medication.route} >Eye Drops</option>
					</select>
					</div>
                </div><br />
				<div className="row">
					<div className="col-md-6">
					<input type='number' name='dosage' placeholder='Dosage' value={medication.dosage}  required="required"  onChange={handleChange}  style={{width:"100%"}}/>
					</div>
					<div className="col-md-6">
					<select type='' placeholder='Direction' name='direction' onChange={handleChange}  required="required"  style={{height:"100%", width:"100%", borderRadius:"5px"}}>
					<option >Direction</option>
					<option value={medication.direction} >Before meals</option>
					<option value={medication.direction} >After meals</option>
					</select>
				</div>
                </div><br />
				<div className="row">
					<div className="col-md-6">
					<select type='' placeholder='Frequency' name='freq' onChange={handleChange}  required="required"  style={{height:"100%", width:"100%", borderRadius:"5px"}}>
					<option >Frequency</option>
					<option value={medication.freq} >If Required</option>
					<option value={medication.freq} >Immediately</option>
					<option value={medication.freq} >Once a day</option>
					<option value={medication.freq} >Twice daily</option>
					<option value={medication.freq} >Thrice daily</option>
					<option value={medication.freq} >Four times a day</option>
					<option value={medication.freq} >Every hour</option>
					<option value={medication.freq} >Every night at bedtime</option>
					<option value={medication.freq} >Every day</option>
					<option value={medication.freq} >Every other day</option>
					<option value={medication.freq} >Every four hours</option>
					<option value={medication.freq} >Once a week</option>
					<option value={medication.freq} >Three times a week</option>
					</select>
					</div>
					<div className="col-md-6">
					<input type='text' name='duration' placeholder='Duration' value={medication.duration}  required="required"  onChange={handleChange}  style={{width:"100%"}}/>
					</div>
                </div><br />
				<div className="row">
					<div className="col-md-6">
					<input type='text' name='total_quant' placeholder='Total Quantity' value={medication.total_quant}  required="required"  onChange={handleChange}  style={{width:"100%"}}/>
					</div>
					<div className="col-md-6">
					<button className="btn-primary" type='submit' name='Add Medication' placeholder="add" style={{width:"100%", border:"3px solid blue", borderRadius:"5px"}}>Add</button>
					</div>
                </div><br />
				
			</form>
			<div>
				{medications.map((med) => {
				return <div key={med.medication_name} style={{border:"1px solid black"}}>
					<div className="row">
					<div className="col-md-6">
					<p>Medicine Name :  {med.medication_name}</p>
					</div>
					<div className="col-md-6">
					<p>Strength :  {med.strength}</p>
					</div><br />			
            		</div>
					<div className="row">
					<div className="col-md-6">
					<p>Preparation :  {med.preparation}</p>
					</div>
					<div className="col-md-6">
					<p>Route :  {med.route}</p>
					</div><br />			
            		</div>
					<div className="row">
					<div className="col-md-6">
					<p>Dosage :  {med.dosage}</p>
					</div>
					<div className="col-md-6">
					<p>Direction :  {med.direction}</p>
					</div><br />			
            		</div>
					<div className="row">
					<div className="col-md-6">
					<p>Frequency :  {med.freq}</p>
					</div>
					<div className="col-md-6">
					<p>Duration :  {med.duration}</p>
					</div><br />			
            		</div>
					<div className="row">
					<div className="col-md-6">
					<p>Total Quantity :  {med.total_quant}</p>
					</div>
					<div className="col-md-6">
					<button className="btn-danger" type="submit" onClick={() => handleDelete(med)} style={{border:"none", borderRadius:"5px"}}>Remove</button>
					</div><br />			
            		</div>                    
                </div>
				})}
			</div>
		</div>
	)
}


export default Medication
