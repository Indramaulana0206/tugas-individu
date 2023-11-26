import axios from 'axios';

const apiUrl = 'https://api.hadith.gading.dev';

export const fetchData = async () => {
    try {
        const response = await axios.get(`${apiUrl}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data : ',error);
        throw error;
    }
}