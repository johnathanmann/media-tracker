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
      <div key={thisPost._id} className="post">
      <h2>{thisPost.title}</h2>
      <p>{thisPost.createdaAt}</p>
      <code>{thisPost.description}</code> <br />
      <button onClick={() => deletePost(postId)} >
      <span id="postId">Delete</span>
      </button>
      </div>
)
}