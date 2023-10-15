import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

axios.defaults.baseURL = `https://${REACT_APP_API_KEY}.mockapi.io`;

export const getData = async endpoint => {
  try {
    const response = await axios.get(endpoint);
    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const updateData = async (endpoint, updatedData) => {
  try {
    const response = await axios.put(endpoint, updatedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
