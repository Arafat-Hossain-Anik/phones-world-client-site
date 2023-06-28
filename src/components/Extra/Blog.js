import React, { useState } from 'react';
import './Blog.css'

const Blog = (props) => {
  const { blog } = props;
  const description = blog.description;
  let displyText = description.slice(0, 100);
  const [showFullText, setShowFullText] = useState(false);
  const handleReadMore = () => {
    setShowFullText(true);
    <span>{displyText}</span>
  }
  const handleShowLess = () => {
    setShowFullText(false);
  }
  return (
    <div className="col">
      <div className="card h-100">
        <img src={blog.img} className="card-img-top blog-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{showFullText
            ? <span>{description} <button className='btn btn-warning' onClick={handleShowLess}>Show less</button></span>
            : <span>{displyText}...<button className='btn btn-warning' onClick={handleReadMore}>Read More</button></span>
          }</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;