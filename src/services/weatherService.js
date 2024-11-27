import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_OPENWEATHER_API_URL;

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', 
        lang: 'es', 
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Error in obtaining the weather:', error);
    throw error;
  }
};
