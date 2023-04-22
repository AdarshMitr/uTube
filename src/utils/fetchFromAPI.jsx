import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';

// console.log('key--',import.meta.env.VITE_APP_UTUBE_API_KEY);

export const fetchFromAPI = async (type, q) => {
  try {
    // console.log('query', q);
    const options = {
      method: 'GET',
      url: `${BASE_URL}/${type}/`,
      params: {q: q, hl: 'en', gl: 'US'},
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_UTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };    
    const { data } = await axios.request(options);
    // console.log('data', data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
