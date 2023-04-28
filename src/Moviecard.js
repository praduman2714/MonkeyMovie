import {Component} from "react";

class Moviecard extends Component{

    constructor(){
      super();
      this.state = {
        title : "The Avenger",
        plot : "American superhero film based on the Marvel Comics superhero team of the same name.In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of  stopping Thor's brother Loki from subjugating Earth",
        price : 199,
        rating : 9.8,
        stars : 0
      }
    }

    increaseStar = ()=>{

      if(this.state.stars >= 5){
        return ;
      }
      // type1 to use setState

      // this.setState({
      //   stars : this.state.stars + 0.5
      // })


      // type2 to use SetState

      this.setState((prevState) =>{
        return {
          stars : prevState.stars + 0.5
        }
      })
    }

    decreaseStars = ()=>{
      if(this.state.stars === 0){
        return ;
      }
      this.setState((prevState) =>{
        return  {
          stars : prevState.stars - 0.5
        }
      })
    }

    render() {
      const {title,plot,price,rating, stars} = this.state;
      return (
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img src="https://www.shutterstock.com/image-photo/las-vegas-nv-usa-sep-260nw-721215637.jpg" alt="poster" />
            </div> 
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot"> {plot} </div>

              <div className="price">{price}</div>

              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                  <img alt="dec" onClick={this.decreaseStars} className="str-btn" src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"/>
                  <img alt="stars" className="stars" src= "https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                  <img alt="inc" className="str-btn" onClick={this.increaseStar} src= "https://cdn-icons-png.flaticon.com/128/3524/3524388.png"/>
                  <span className="starCount">{stars}</span>
                </div>
                <button className="favourite-btn">Favourite</button>
                <button className="cart-btn">Add to Cart</button>
              </div>
              
            </div>
          </div>
        </div>
      )
    }
}


export default Moviecard;