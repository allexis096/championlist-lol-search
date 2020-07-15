import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/10.14.1/data/pt_BR/champion',
});

export default api;
