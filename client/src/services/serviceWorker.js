import Axios from 'axios'
const BASE_URL = "http://localhost:5000";

export const sendEmail = async (formDetails) => {
    const task = await Axios.post(`${BASE_URL}/api/send-email`, formDetails);
    const response = task.data;
    return response;
}