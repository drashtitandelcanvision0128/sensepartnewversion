import React from 'react'
import './blogs.css';
import { blogData } from '../../data/blogData';




const Blogs = () => {

  return (
    <div className="blogs-page">
      <h1>Our Blogs</h1>

      <div className="blogs-container">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
