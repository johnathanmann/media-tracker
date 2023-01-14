import React from "react";
import Auth from "../../utils/auth";
import "../../styles/create.css";
  
  export default function CreatePost() {
    const userProfile = Auth.getProfile();
    const userId = userProfile.data._id

    async function postForm() {
      // Get post title
      const postTitle = document.getElementById('postTitle').value;
      // Get post content
      const postDescription = document.getElementById('postDescription').value;
      const postType = document.getElementById('postType').value;
      const postTime = document.getElementById('postTime').value;
      const postRating = document.getElementById('postRating').value;
      // Make post to database so we can show it on the site
      if (postTitle) {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({
            user: userId,
            title: postTitle,
            type: postType,
            description: postDescription,
            time: postTime,
            rating: postRating
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
      if (postTitle) {
        const response = await fetch(`api/users/${userId}`, {
          method: 'PUT',
          body: JSON.stringify({
            userTime: postTime
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

    return (
      <div id="post-create">
        <div>
        <h3>New Post</h3>
        <form>
              <label>Post Title:</label><br/>
            <textarea id="postTitle" rows="1"/><br/>
            <label>Post Type:</label> <br/>
            <select id="postType" name="type">
              <option value="albums">Albums</option>
              <option value="anime">Anime</option>
              <option value="books">Books</option>
              <option value="comics">Comics/Manga</option>
              <option value="movies">Movies</option>
              <option value="shows">Shows</option>
              <option value="games">Games</option>
              <option value="other">Other</option>
            </select><br/>
            <label htmlFor="quantity">Completion Time (in minutes):</label>
            <input type="number" id="postTime" min="0"></input><br/>
              <label>Post Description:</label><br/>
            <textarea
              id="postDescription"
              rows="2"
            ></textarea><br/>
            <label htmlFor="quantity">Rating (0-10):</label>
            <input type="number" id="postRating"  min="0" max="10"></input><br/><br/>
            <button onClick={() => postForm()} id="postSubmit" type="submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }