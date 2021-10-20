
import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '522308371e651d7928f712c780907a4b',
        language: 'es-ES'
    }
});

export default movieDB;