import axios from 'axios';
import { create } from 'domain';

export default axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});
