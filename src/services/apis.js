import axios from 'axios';

export const key = 'e06a83cb5a354cae0a3403894483fb5f';

export const theMovieDBAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const myMoviesAPI = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
});
