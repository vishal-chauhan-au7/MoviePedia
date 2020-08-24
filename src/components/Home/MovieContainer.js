import React , { Component } from "react";
import {connect} from 'react-redux';
import MovieCard from './MovieCard'


class MovieContainer extends Component{
    render(){
         
        const {movies} = this.props

        let content = ''

        content = movies.movies.Response === 'True' ? movies.movies.Search.map((movie,index)=><MovieCard key={index} movie={movie}/>) : null ; 

        return(
            <div className="row">
                {content}
            </div>
        )
    }
}


const mapstatetoprops = state =>({
    movies:state.movies
})

export default connect(mapstatetoprops)(MovieContainer);