import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api';


const getAllEvents = async () => {
    const response = await axios.get(API_URL + '/events');
    return response.data;
};

const getEvent = async (idEvent) => {
    const response = await axios.get(API_URL + '/events/' + idEvent);
    return response.data.event;
}

export default {
    getAllEvents,
    getEvent
};