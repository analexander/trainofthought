import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: '563492ad6f9170000100000126f4111016e74921b5e75f77f689d388'
    }
});