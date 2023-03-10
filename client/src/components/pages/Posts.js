import { useState, useEffect } from "react";
import React from "react";
import SinglePost from "../SinglePost";
import Auth from "../../utils/auth";
import "../../styles/posts.css";

export default function Dashboard() {
  const [allPosts, setAllPosts] = useState([]);
  const userProfile = Auth.getProfile();
  const userId = userProfile.data._id

  async function getPosts() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
console.log(allPosts)
    setAllPosts(allPosts.allPosts);
  };

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
  useEffect(() => {
    getUser();
  });

  useEffect(() => {
    getPosts();
  }, []);

  function refreshPage(){
    window.location.reload();
} 

  return (
    <div id="posts-container">
    <div>
      <h1 className="header">{singleUser.username}'s posts</h1>
      <SinglePost allPosts={allPosts} userId={userId}/>
    </div>
    </div>
  );
}
