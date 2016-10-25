import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getBlogList } from 'actions/index.js';

import './styling.scss';

function createContentMarkup(content) { return {__html: content}; };

function decodeMarkupString(encodedMarkup) {
    let tmpElement = document.createElement('span');
    tmpElement.innerHTML = encodedMarkup;
    return tmpElement.innerText;
}

function ISODateToDateString(ISODate) {
    const date = new Date(ISODate);
    const dateOptions = {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
    };
    return date.toLocaleDateString('en-GB', dateOptions);
}

class BlogList extends React.Component {
    componentWillMount() {
        if (!this.props.blogList) {
            this.props.getBlogList();
        }
    }
    render() {
        const { blogList } = this.props;
        const blogListMarkup = () => (
            <div className="wrapper">
                <h1 className="title">Blog</h1>
                {
                    blogList.map((blog, i) => {
                        const content = decodeMarkupString(blog.brief_content);
                        return (
                            <Link key={i} to={`/blog/${blog.slug}`} className="blog-item button__clear -dark">
                                <div className="heading-annotation -faint">{ISODateToDateString(blog.date)}</div>
                                <div className="heading3">{blog.title}</div>
                                <div>
                                    <span className="copy -faint" dangerouslySetInnerHTML={createContentMarkup(content)}></span>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        );
        return blogList ? blogListMarkup() : null;
    }
}

function mapStateToProps(state) {
    return {
        blogList: state.blogList.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBlogList: () => dispatch(getBlogList())
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogList);
