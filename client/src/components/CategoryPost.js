import React from "react";

import Post from "./Post";

export default function CategoryPost({
  allPosts
}) {


return(
  allPosts.map((post) => (
    <div key={post._id} className="categoryPost">
      <Post thisPost={post}/>
      </div>
  ))
)
}
