import axios from 'axios';

export const eprescdetail = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/doctors/list/`);
        
        return res
        
    } catch(err) {
        return err;
    }
};