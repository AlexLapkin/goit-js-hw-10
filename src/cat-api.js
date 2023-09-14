import axios from "axios";

const API_KEY = 'live_98IPYpuaXNQmBrmfnPSpTkLI0G1ltTpNfVioWIJVFlUakqmyyfLDigUw4o6jf8nw';

axios.defaults.headers.common["x-api-key"] = "API_KEY";

const BASE_URL = 'https://api.thecatapi.com/v1'

export function fetchBreeds() {

  return axios.get(`${BASE_URL}/breeds`)
  .then(function (response) {
     return response;
  })
  .catch (function (error){
   console.log(error);
  })
}

export function fetchCatByBreed(breedId){
   return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}123`)
  .then(function (response) {
     return response;
   })
   .catch (function (error){
      console.log(error);
     })
}