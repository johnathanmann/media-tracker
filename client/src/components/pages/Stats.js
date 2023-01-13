import { useState, useEffect } from "react";
import React from "react";
import Auth from "../../utils/auth";
import "../../styles/posts.css";

export default function Dashboard() {
  const [allAlbums, setAllAlbums] = useState([]);
  const [allAnimes, setAllAnimes] = useState([]);
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
  useEffect(() => {
    getUser();
  },[userID]);
  useEffect(() => {
    getAlbums();
  });
  useEffect(()=>{
    getAnimes();
  })

  return (
    <div id="posts-container">
    <div>
      <h1 className="header">{singleUser.username} has {allAlbums.length}</h1>
      <h1 className="header">{singleUser.username} has {allAnimes.length}</h1>
    </div>
    </div>
  );
}
