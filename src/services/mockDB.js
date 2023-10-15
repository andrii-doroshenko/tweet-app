import axios from 'axios';

axios.defaults.baseURL = 'https://64b5adb3f3dbab5a95c7953c.mockapi.io';

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
