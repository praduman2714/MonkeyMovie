import React from "react";
import Moviecard from "./Moviecard";


function MovieList(props) {
   
   // render(){
      //console.log(this.props);
      const {addStars, decStars, toggleCart, toggleFav } = props
      const {movies} = props
      // console.log(this.props);
      
    //    console.log(movies);
        return (
            <>

               {movies.map((data, index) =>(
                <Moviecard key={index}  movies = {data} addStars = {addStars}
                  decStars = {decStars} toggleCart = {toggleCart} toggleFav = {toggleFav} />
               ))}
                
            </>
        )
  //  }
}

export default MovieList;