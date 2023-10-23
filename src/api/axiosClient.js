import axios from 'axios';

export default axios.create({
  baseURL: `https://api-tiki.vercel.app/api`,
});
