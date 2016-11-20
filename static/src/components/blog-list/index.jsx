import React from 'react';

import BlogListItem from 'components/blog-list-item/index.jsx';

const BlogList = ({items}) => (
    <div className="wrapper">
        <h1 className="title">Blog</h1>
        {
            items.map((blog, i) => {
                return <BlogListItem key={i} {...blog} />;
            })
        }
    </div>
);

export default BlogList;
