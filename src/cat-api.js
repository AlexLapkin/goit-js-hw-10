import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_98IPYpuaXNQmBrmfnPSpTkLI0G1ltTpNfVioWIJVFlUakqmyyfLDigUw4o6jf8nw";

// Делаем запрос через метод GET axios
const axios = require('axios');
const BASE_URL = 'https://api.thecatapi.com/v1'

export function fetchBreeds() {

  return axios.get(`${BASE_URL}/breeds`)
  .then(function (response) {
     return response;
 });
}

export function fetchCatByBreed(breedId){
   return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
  .then(function (response) {
    return response;
   });
}