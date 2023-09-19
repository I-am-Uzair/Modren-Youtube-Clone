import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";


const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com',
  params: {part: 'snippet', videoId: 'M7FIvfx5J10', maxResults: '50',},
  headers: {
    'X-RapidAPI-Key': 'Rapid API key',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
  };
//BASE_URL/CHANNEL

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
};