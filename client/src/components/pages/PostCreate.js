import React, { useState, useEffect } from "react";
import Auth from "../../utils/auth";

async function postForm() {
  // Get post title
  const postTitle = document.getElementById('postTitle').value;
  // Get post content
  const postDescription = document.getElementById('postDescription').value;
  // Get userId
  const userId = document.querySelector('#userId').textContent;
  // Make post to database so we can show it on the site
  if (postTitle, postDescription) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        user: userId,
        title: postTitle,
        description: postDescription
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('Post Posted');
    } else {
      alert(response.statusText);
    }
  }
  };
  
  export default function Planner({handlePageChange }) {
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

    return (
      <div>
        <div>
        <h3>New Post</h3>
        <form>
              <label>Post Title:</label>
            <textarea id="postTitle"/>
              <label>Post Description:</label>
            <textarea
              id="postDescription"
              rows="3"
            ></textarea>
            <button onClick={() =>postForm()} id="plannerSubmit" type="submit">Submit
            </button>
        </form>
      </div>
      </div>
    );
  }