import { useState, useEffect } from "react";
import React from "react";
import CategoryPost from "../CategoryPost";
import Auth from "../../utils/auth";

export default function Dashboard() {
  const [allPosts, setAllPosts] = useState([]);
  const userProfile = Auth.getProfile();
  const userId = userProfile.data._id

  async function getPosts() {
    const response = await fetch(`/api/users/posts/${userId}`);
    const allPosts = await response.json();
    var wantedData = allPosts.allPosts.filter(function(i) {
      return i.type === "books";
    });
    console.log(wantedData)
    setAllPosts(wantedData);
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

  return (
    <div className="category">
    <div >
      <h1 className="header">{singleUser.username}'s books</h1>
      <CategoryPost allPosts={allPosts} userId={userId}/>
    </div>
    </div>
  );
}
