import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7a6c5.firebaseio.com/'
});

export default instance;