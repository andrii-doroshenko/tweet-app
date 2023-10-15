import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

axios.defaults.baseURL = `https://${REACT_APP_API_KEY}.mockapi.io`;

export const getData = async (endpoint, page) => {
  try {
    const response = await axios.get(endpoint, {
      params: {
        l: 3,
        p: page,
      },
    });

    if (!response.status === 200) throw new Error();

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
