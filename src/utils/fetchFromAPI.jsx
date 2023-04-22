import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_UTube_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
    
  }
};
