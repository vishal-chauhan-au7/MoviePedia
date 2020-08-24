import {SEARCH_MOVIE, FETCH_MOVIE,FETCH_MOVIES} from "../Actions/type";

const InitState = {
    text : "",
    movies:[],
    loading:false,
    movie:[]
}


export default function (state = InitState,action){
    switch(action.type){
        case SEARCH_MOVIE:
            return{
                ...state,
                text:action.payload,
                loading:false
            }
        case FETCH_MOVIES:
            return{
                ...state,
                movies:action.payload,
            }
        case FETCH_MOVIE:
            return{
                ...state,
                movie:action.payload
            }        
            default:
                return state
    }
}