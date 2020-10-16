import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:4444/sendtome'
  baseURL: 'https://code-experiment-mail-server.herokuapp.com/sendtome'
})