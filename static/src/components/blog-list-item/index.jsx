import React from 'react';
import { Link } from 'react-router';

const BlogListItem = ({
    slug,
    date,
    title,
    briefContent
}) => (
    <Link to={`/blog/${slug}`} className="blog-item button__clear -dark">
        <div className="heading-annotation -faint">{date}</div>
        <div className="heading3">{title}</div>
        <div>
            <span className="copy -faint" dangerouslySetInnerHTML={briefContent}></span>
        </div>
    </Link>
);

export default BlogListItem;
