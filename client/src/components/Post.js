import React from "react";

async function deletePost(post_Id) {
  console.log(post_Id)
  const click = true;
  // Make post to database so we can show it on the site
  if (click) {
    const response = await fetch(`/api/posts/${post_Id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('Post Deleted');
    } else {
      alert(response.statusText);
    }
  }
  };

export default function Post({thisPost}) {
  const postId = thisPost._id;
return (
      <div key={thisPost._id}>
      <h2>{thisPost.title}  <span className="rating">{thisPost.rating}/10</span></h2>
      <p className="time postBody">{thisPost.createdAt}</p>
      <p className="time postBody">Minutes Spent: {thisPost.time}</p>
      <h6 className="postBody">{thisPost.description}</h6>
      <button className="delete" onClick={() => deletePost(postId)} >- Delete</button>
      </div>
)
}