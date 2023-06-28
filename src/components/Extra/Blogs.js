import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(result => result.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(Blogs);
    return (
        <>
            <div className='mt-5' style={{ textAlign: 'center' }}>
                <h2><b>Latest Blog</b></h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    Blogs?.map((blog) => <Blog key={blog._key} blog={blog}></Blog>)
                }
            </div>
        </>
    );
};

export default Blogs;