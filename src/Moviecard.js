import {Component} from "react";

class Moviecard extends Component{

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

    handleFav = ()=>{
      this.setState({
        fav : !this.state.fav
      })
    }

    handleCart = ()=>{
      this.setState({
        cart : !this.state.cart
      })
    }
   // console.log(this.props);
    render() {
      // console.log( this.props);
      const {addStars, decStars, toggleCart, toggleFav } = this.props
      const {title,poster, plot,price,rating, stars, fav, cart} = this.props.movies;
      return (
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img src={poster} alt="poster" />
            </div> 
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot"> {plot} </div>

              <div className="price">{price}</div>

              <div className="footer">
                <div className="rating">{rating}</div>

                <div className="star-dis">
                  <img alt="dec" onClick={()=>decStars(this.props.movies)} className="str-btn" src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"/>
                  <img alt="stars" className="stars" src= "https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                  <img alt="inc" className="str-btn" onClick={()=>addStars(this.props.movies) } src= "https://cdn-icons-png.flaticon.com/128/3524/3524388.png"/>
                  <span className="starCount">{stars}</span>
                </div>

                {fav ? <button onClick={()=> toggleFav(this.props.movies)} className="unfavourite-btn">Un-favourite</button> : 
                <button onClick={()=> toggleFav(this.props.movies)} className="favourite-btn">Favourite</button>}
                
                 <button onClick={() =>toggleCart(this.props.movies)} className={!cart ? "cart-btn" : "unfavourite-btn"} 
                 >{!cart ? "Add To Cart" : "Remove from Cart"}</button> 
                  
              </div>
              
            </div>
          </div>
        </div>
      )
    }
}


export default Moviecard;