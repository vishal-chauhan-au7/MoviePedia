import {SEARCH_MOVIE,FETCH_MOVIE,FETCH_MOVIES} from "./type";
import axios from "axios"
import {APIKey}  from '../APIKey'

export const searchMovie = (text) => dispatch =>{
    dispatch({
        type:SEARCH_MOVIE,
        payload:text
    })
} 

export const FetchMovies = (text) => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
      .then(response=>dispatch({
          type:FETCH_MOVIES,
          payload:response.data
      }))
      .catch(error => console.log(error));
      

}
export const fetchMovie = (id) => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
      .then(response=>dispatch({
          type:FETCH_MOVIE,
          payload:response.data
      }))
      .catch(error => console.log(error));
      

}