import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/events';


const getAllEvents = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export default {
    getAllEvents
};