import axios from 'axios';

export const prescriptiondetail = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/eprescription/prescriptiondata/`);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};



export const medicationdetail = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/eprescription/medicationdata/`);
        
        return res
        
        
    } catch(err) {
        return err;
    }
};