import React from "react";
import "../../styles/homepage.css"
import album from "../../assets/imgs/album.png";
import book from "../../assets/imgs/book.png";
import movie from "../../assets/imgs/movie.png";
import tv from "../../assets/imgs/tv.png";

export default function Homepage({handlePageChange }){
    return(
        <div id="homepage">
        <div className="row">
        <div className='col-md-5'>
            <h1 className="display-1"><span className="rainbow-text1">2023</span><br /><span className="rainbow-text2">Media</span><br /><span className="rainbow-text3">Tracker</span></h1>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
          </div>
          <div className="col-md-7 text-center">
            <img className="icon floating" id="albumIcon" src={album}/>
            <img className="icon floating" id="bookIcon" src={book}/><br/>
            <img className="icon floating" id="movieIcon" src={movie}/>
            <img className="icon floating" id="tvIcon" src={tv}/>
          </div>
          </div>
        </div>
    )
}