import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global';

export async function getApiData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
