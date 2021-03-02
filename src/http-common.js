import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://restcountries.eu/rest/v2/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})