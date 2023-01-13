import { useState, useEffect } from "react";
import React from "react";
import Auth from "../../utils/auth";
import "../../styles/stats.css";
import CanvasJSReact from '../../assets/canvasjs-3.7.4/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const styles = {
  canvas:{
    width: '500px',
    height: '500px',
    position: 'absolute',
    borderRadius: "10px"
}
}

export default function Dashboard() {
  const [allPosts, setAllPosts] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);
  const [allAnimes, setAllAnimes] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [allComics, setAllComics] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [allShows, setAllShows] = useState([]);
  const [allOther, setAllOther] = useState([]);

  const userProfile = Auth.getProfile();
  const userId = userProfile.data._id

  const [singleUser, setSingleUser] = useState([]);
  const [userID, setUserID] = useState([]);

  async function getUser() {
    const tokenData = Auth.getProfile();
    const userInfo = tokenData.data._id;
    setUserID(userInfo);
    const response = await fetch(`/api/users/${userID}`);
    const singleUser = await response.json();

    setSingleUser(singleUser)
  }
  async function getPosts() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    setAllPosts(allPosts.allPosts);
  };
  async function getAlbums() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    var wantedData = allPosts.allPosts.filter(function(i) {
      return i.type === "albums";
    });
    setAllAlbums(wantedData);
  };
  async function getAnimes() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    var wantedData = allPosts.allPosts.filter(function(i) {
      return i.type === "anime";
    });
    setAllAnimes(wantedData);
  };
  async function getBooks() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    var wantedData = allPosts.allPosts.filter(function(i) {
      return i.type === "books";
    });
    setAllBooks(wantedData);
  };
  async function getComics() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    var wantedData = allPosts.allPosts.filter(function(i) {
      return i.type === "comics";
    });
    setAllComics(wantedData);
  };
  async function getGames() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    var wantedData = allPosts.allPosts.filter(function(i) {
      return i.type === "games";
    });
    setAllGames(wantedData);
  };
  async function getMovies() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    var wantedData = allPosts.allPosts.filter(function(i) {
      return i.type === "movies";
    });
    setAllMovies(wantedData);
  };
  async function getShows() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    var wantedData = allPosts.allPosts.filter(function(i) {
      return i.type === "shows";
    });
    setAllShows(wantedData);
  };
  async function getOther() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    var wantedData = allPosts.allPosts.filter(function(i) {
      return i.type === "other";
    });
    setAllOther(wantedData);
  };

  useEffect(() => {
    getPosts();
    getUser();
    getAlbums();
    getAnimes();
    getBooks();
    getComics();
    getGames();
    getMovies();
    getOther();
    getShows();
  });

		const options = {
			animationEnabled: true,
			title: {
				text: ""
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: `${((allAlbums.length / allPosts.length) * 100)}`, color: "#e5524e", label: "Albums" },
					{ y: `${((allAnimes.length / allPosts.length) * 100)}`, color: "#ea8a58", label: "Anime" },
          { y: `${((allBooks.length / allPosts.length) * 100)}`, color: "#eaab3f", label: "Books" },
          { y: `${((allComics.length / allPosts.length) * 100)}`, color: "#8ab560", label: "Comics/Manga" },
          { y: `${((allMovies.length / allPosts.length) * 100)}`, color: "#519f82", label: "Movies" },
          { y: `${((allShows.length / allPosts.length) * 100)}`, color: "#427d9e", label: "Shows" },
          { y: `${((allGames.length / allPosts.length) * 100)}`, color: "#b639ae", label: "Games" },
          { y: `${((allOther.length / allPosts.length) * 100)}`, color: "#da4c88", label: "Other" },
				]
			}]
	}

  return (
    <div id="posts-container">
    <div>
    <CanvasJSChart options = {options} style={styles.canvas}/>
      <h1 className="header">{singleUser.username} has {allAlbums.length}</h1>
      <h1 className="header">{singleUser.username} has {allAnimes.length}</h1>
    </div>
    </div>
  );
}
