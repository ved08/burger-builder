import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burger-builder-69de1.firebaseio.com/'
});

export default instance