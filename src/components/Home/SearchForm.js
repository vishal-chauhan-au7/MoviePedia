import React, { Component } from "react";
import {connect} from "react-redux";

import {searchMovie,FetchMovies} from "../../Actions/searchaction";

class SearchForm extends Component{
    handlechange = e =>{
        this.props.searchMovie(e.target.value);
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.props.FetchMovies(this.props.text)
    }


    render(){
        return(
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search">
                            Search for Movies and , Tv Series ....
                        </i>
                    </h1>
                    <form id="searchForm" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" name="searchText" placeholder="Search for Movies and , Tv Series ...." onChange={this.handlechange}/>
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>

                </div>

            </div>
        )
    }
}

const mapstatetoprops = state =>({
    text:state.movies.text
})


export default connect(mapstatetoprops,{searchMovie,FetchMovies})(SearchForm);