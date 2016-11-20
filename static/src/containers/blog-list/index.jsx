import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getBlogList } from 'actions/index.js';
import BlogList from 'components/blog-list/index.jsx';

import './styling.scss';

class BlogListContainer extends React.Component {
    componentWillMount() {
        if (!this.props.items) {
            this.props.getBlogList();
        }
    }
    render() {
        const { items } = this.props;
        return items ? <BlogList items={items}/> : <div></div>;
    }
}

function mapStateToProps(state) {
    return {
        items: state.blogList.items
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
)(BlogListContainer);
