import MovieList from "./Movielist";
import React from "react";
import Navbar from "./Navbar";
import {movies} from "./moviesData";

class App extends React.Component {

  constructor(){
    super();
    this.state = 
    {
      movies : movies,
      cartCount : 0
    }
  }
//   Passing the reference of addStars
  addStars = (movie)=>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    if(movies[mid] >= 5){
        return ;
    }
    movies[mid].stars+=0.5;
    this.setState({
        movies
    });
  }

  decreaseStars = (movie) =>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    if(movies[mid] <= 0){
        return ;
    }
    movies[mid].stars-=0.5;
    this.setState({
        movies
    });
  }

  toggleCart = (movie) =>{
    let {movies, cartCount} = this.state;
    const mid = movies.indexOf(movie);
    //movies[mid].cart = !movies[mid].cart;
    if(movies[mid].cart){
      cartCount--;
      
    }else{
      cartCount++;
    }
    movies[mid].cart = !movies[mid].cart;
    this.setState({
        movies,
        cartCount
    })
  }

  toggleFav = (movie) =>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
        movies
    })
  }
  
  render() {
    // console.log(this.state);
    // console.log("hello");
    return (
      <div className="App">
        <header className="App-header">
          <Navbar cartCount = {this.state.cartCount} />
          <MovieList movies = {this.state.movies} addStars = {this.addStars} decStars = {this.decreaseStars}
                toggleCart = {this.toggleCart} toggleFav = {this.toggleFav}/>
        </header>
      </div>
    );
  }
  
}

export default App;
