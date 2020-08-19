import React from "react";

function Posts({ posts, loading }) {
  return loading ? (
    <h1>loading</h1>
  ) : (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
