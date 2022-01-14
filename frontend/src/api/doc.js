import axios from 'axios';

export const doctordetail = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/doctors/list`);
        console.log(res)
        
        
    } catch(err) {
        return err;
    }
};