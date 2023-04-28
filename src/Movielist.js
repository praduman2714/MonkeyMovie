import React from "react";
import Moviecard from "./Moviecard";

class MovieList extends React.Component {
    constructor(){
        super();
        this.state = 
        {
          movies : [{
            title : "The Avenger",
            poster: 'https://www.shutterstock.com/image-photo/las-vegas-nv-usa-sep-260nw-721215637.jpg',
            plot : "American superhero film based on the Marvel Comics superhero team of the same name.In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of  stopping Thor's brother Loki from subjugating Earth",
            price : 199,
            rating : 9.8,
            stars : 0,
            fav : false,
            cart : false
          },
          {
            title : "Lagan",
            poster : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiWdN181yXmxfE_D15V044jhgr07gE_aikvbI97qBc6XkSKLUo',
            plot : "American superhero film based on the Marvel Comics superhero team of the same name.In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of  stopping Thor's brother Loki from subjugating Earth",
            price : 199,
            rating : 9.8,
            stars : 0,
            fav : false,
            cart : false
          },
          {
            title : "Bhola",
            poster : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj',
            plot : "American superhero film based on the Marvel Comics superhero team of the same name.In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of  stopping Thor's brother Loki from subjugating Earth",
            price : 199,
            rating : 9.8,
            stars : 0,
            fav : false,
            cart : false
          }
        ]
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
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].cart = !movies[mid].cart;
        this.setState({
            movies
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



    render(){
        const {movies} = this.state;
    //    console.log(movies);
        return (
            <>

               {movies.map((data, index) =>(
                <Moviecard key={index}  movies = {data} addStars = {this.addStars} decStars = {this.decreaseStars}
                toggleCart = {this.toggleCart} toggleFav = {this.toggleFav}/>
               ))}
                
            </>
        )
    }
}

export default MovieList;