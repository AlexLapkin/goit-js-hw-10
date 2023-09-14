import { fetchBreeds, fetchCatByBreed } from "./cat-api" ;
import './styles.css';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_98IPYpuaXNQmBrmfnPSpTkLI0G1ltTpNfVioWIJVFlUakqmyyfLDigUw4o6jf8nw";

const selectInput = document.querySelector('.breed-select');
const catContainer = document.querySelector('.cat-info');
const pLoader = document.querySelector('.loader');
const pError = document.querySelector('.error');

pError.classList.add("is-hidden");
selectInput.classList.add("is-hidden");

fetchBreeds().then(function (response) {
        
     selectInput.classList.remove("is-hidden");
     pLoader.classList.add("is-hidden");
          
     // Функция наполняющая select опциями таким образом, чтобы value содержал id породы,
     // а в интерфейсе отображалось название породы
     const renderList = (arr, container) => {
      const markup = arr.map((item) => `<option value="${item.id}">${item.name}</option>`
      )
      .join("");
      container.insertAdjacentHTML("beforeend", markup);
           
  }
      renderList(response.data, selectInput);
  
      new SlimSelect({
        select: selectInput,
        })
 
  })
  .catch(function (error) {
    pLoader.classList.add("is-hidden");
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!', {
      position: 'center-center',
      timeout: 10000,
    })
  }) ;


  const onChange = (event) => {
  pLoader.classList.remove("is-hidden");
  catContainer.classList.add("is-hidden");
  selectInput.classList.add("is-hidden");
  event.preventDefault();
  fetchCatByBreed(event.currentTarget.value)
  .then(function (response) {
    
    catContainer.innerHTML = '' ;
    catContainer.classList.remove("is-hidden");
    const { breeds, url } = response.data[0];
    const catList = `<div><img src="${ url }" alt="" width="400" /></div> 
        <div>
        <h2>${breeds[0].name}</h2>
        <p>${breeds[0].description}</p>
        <p><p><b>Temperament:</b> ${breeds[0].temperament}</p>
        </div>`
      
        catContainer.innerHTML += catList;
        pLoader.classList.add("is-hidden");
        selectInput.classList.remove("is-hidden");

  })
     .catch(function (error) {
      selectInput.classList.add("is-hidden");
      pLoader.classList.add("is-hidden");
      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!', {
        position: 'center-center',
        timeout: 10000,
      })
    })
  }

 // Функция прослушивания select
 selectInput.addEventListener("change", onChange);