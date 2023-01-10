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
        <div className='col-lg-5 col-md-12'>
            <h1 className="display-1"><span className="rainbow-text1">2023</span><br /><span className="rainbow-text2">Media</span><br /><span className="rainbow-text3">Tracker</span></h1>
            <h5>Keep track of all the media you consume this year. Log your time and check your stats on everything you read, watch, and listen too. By the end of the year you will be able to brag to all your friends about how much time you wasted playing video games! Just me...? Ha ha okay...</h5>
          </div>
          <div className="col-lg-7 col-md-12 text-center">
            <div className="click-to-top">
              <img className="icon floating img-fluid" id="albumIcon" src={album} alt="Red vinyl record icon"/>
            <div className="tooltip">
              <span className="icon floating" id="albumIcon"><h6>Save your favorite albums of the year!</h6></span>
            </div>
          </div>
            <div className="click-to-top">
              <img className="icon floating img-fluid" id="bookIcon" src={book} alt="Green book icon"/>
            <div className="tooltip">
              <span className="icon floating" id="bookIcon"><h6>Log all of your new reads</h6></span>
            </div>
          </div><div className="break"><br/></div>
            <div className="click-to-top">
              <img className="icon floating img-fluid" id="movieIcon" src={movie} alt="Blue VHS icon"/>
            <div className="tooltip">
              <span className="icon floating img-fluid" id="movieIcon"><h6>See how many movies you watched</h6></span>
            </div>
          </div>
            <div className="click-to-top">
              <img className="icon floating" id="tvIcon" src={tv} alt="Purple television icon"/>
            <div className="tooltip">
              <span className="icon floating" id="tvIcon"><h6>Keep track of all of this years top tv series</h6></span>
            </div>
          </div>
          </div>
          </div>
        </div>
    )
}