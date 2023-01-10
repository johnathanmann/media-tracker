import React from "react";

import Post from "./Post";

export default function SinglePost({
  allPosts
}) {


return(
  allPosts.map((post) => (
    <div key={post._id} className={post.type}>
      <Post thisPost={post}/>
      </div>
  ))
)
}
