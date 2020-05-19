import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://faelplg-react-burger-builder.firebaseio.com/',
});

export default instance;
