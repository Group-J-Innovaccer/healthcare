import React, { useState } from 'react';


const  Medication = () => {

	const [medications, setMedications] = useState([])
	const [medication, setMedication] = useState(
		{
		'medication_name': '',
		'dosage': '',
		'freq': ''
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
			'dosage': '',
			'freq': ''
		})

	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='medication_name' placeholder='Medication Name' value={medication.medication_name} onChange={handleChange} />
				<input type='number' name='dosage' placeholder='Dosage' value={medication.dosage}  onChange={handleChange} />
				<input type='number' name='freq' placeholder='Frequency' value={medication.freq} onChange={handleChange} />
				<input type='submit' name='Add Medication'/>
			</form>
			<div>
				{medications.map((med) => {
					return <div key={med.medication_name}>{med.medication_name} of {med.dosage} {med.freq} times</div>
				})}
			</div>
		</div>
	)
}

export default Medication
