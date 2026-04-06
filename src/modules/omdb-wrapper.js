/* Módulo  OMDBWrapper*/

import axios from "axios";


const APIKEY = "e9d7420b"


const OMDBSearchByPage = async (searchText, page = 1) => {
    const requestString = `http://www.omdbapi.com/?apikey=e9d7420b&s=${searchText}&page=${page}`;
    const apiResponse = await axios.get(requestString);
    let returnObject = {
        respuesta: true,
        cantidadTotal: apiResponse.data.totalResults,
        datos: apiResponse.data.Search
    };
    return returnObject;

};


const OMDBSearchComplete = async (searchText,i) => {
    const requestString = `http://www.omdbapi.com/?apikey=e9d7420b&s=${searchText}&page=${i}`;
    const apiResponse = await axios.get(requestString);
    let returnObject = {
        respuesta: true,
        cantidadTotal: apiResponse.data.totalResults,
        datos: apiResponse.data.Search
    }
    return returnObject;

};


const OMDBGetByImdbID = async (imdbID) => {

   const requestString = `https://www.omdbapi.com/?i=${imdbID}&apikey=e9d7420b`;
    const apiResponse = await axios.get(requestString);
    let returnObject = {
        respuesta: true,
        cantidadTotal: apiResponse.data.totalResults,
        datos: apiResponse.data.Search
    }
    return returnObject;

};


// Exporto todo lo que yo quiero exponer del módulo:

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };