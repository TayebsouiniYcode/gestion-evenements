import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/test';
const getTestFromLaravel = async () => {
   console.log("this is simple test");
   // eslint-disable-next-line no-useless-catch
   try {
      const response = await axios.get(API_URL);
      return response.data;
   } catch (error) {
      throw error;
   }
};

export default {
    getTestFromLaravel
};