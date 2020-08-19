import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios("http://jsonplaceholder.typicode.com/posts");

      setPosts(result.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // GET current posts by getting the indeces from the 100 item array by 10's
  // so you will only map 10 items at a time
  // and make buttons to change current page which will change indeces used in slice
  // and displays pages 10 items each
  const indexOfLastPost = currentPage * postsPerPage; // 1 * 10 = 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10 = 0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // slice(0,10) gives 10 posts

  //change page functions
  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Archive</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
