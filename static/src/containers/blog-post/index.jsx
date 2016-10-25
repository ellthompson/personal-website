import React from 'react';
import { connect } from 'react-redux';

import { getBlog } from 'actions/index.js';

import './styling.scss';

//TODO move these into a helper module
function createContentMarkup(content) { return {__html: content}; };

function decodeMarkupString(encodedMarkup) {
    let tmpElement = document.createElement('span');
    tmpElement.innerHTML = encodedMarkup;
    return tmpElement.innerText;
}

class BlogPost extends React.Component {
    componentWillMount() {
        const { blogs, getBlog, params } = this.props;
        if (!blogs[params.slug]) {
            getBlog(params.slug);
        }
    }
    render() {
        const { blogs, params } = this.props;
        const blog = blogs[params.slug];
        const blogMarkup = () =>  {
            const content = decodeMarkupString(blog.content);
            return (
                <div className="wrapper">
                    <h1 className="title">{ blog.title }</h1>
                    <div className="blog-post__content" dangerouslySetInnerHTML={createContentMarkup(content)}></div>
                </div>
            );
        };
        return blog ? blogMarkup() : null;
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBlog: (slug) => dispatch(getBlog(slug))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPost);
