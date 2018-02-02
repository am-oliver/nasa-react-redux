import axios from 'axios';

export default function fetchData() {
    const NASA_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
    const API_KEY = 'uW5oPgEqbCqQzts7H016GxKRnEo8bZuQrdfSRPPU';
    const request = axios.get(NASA_URL + API_KEY)

    return {
        type: 'FETCH_DATA',
        payload: request
    }
}