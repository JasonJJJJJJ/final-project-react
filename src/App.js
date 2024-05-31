import React, { useState, useEffect } from 'react';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.slice(0, visiblePosts).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default BlogPosts;