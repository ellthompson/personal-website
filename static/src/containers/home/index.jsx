import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './styling.scss';

import { getHomepage } from 'actions/index.js';

function createContentMarkup(content) { return {__html: content}; };

function decodeMarkupString(encodedMarkup) {
    let tmpElement = document.createElement('span');
    tmpElement.innerHTML = encodedMarkup;
    return tmpElement.innerText;
}

class Home extends React.Component {
    componentWillMount() {
        if (!this.props.pageContent) {
            this.props.getHomepage();
        }
    }
    render() {
        const { pageContent, isFetching } = this.props;
        const content = decodeMarkupString(pageContent);
        const homepageMarkup = (
            <div className="wrapper about-me__wrapper">
                <div className="about-me__area" dangerouslySetInnerHTML={createContentMarkup(content)}></div>
            </div>
        );
        return isFetching ? null : homepageMarkup;
    }
}

const mapStateToProps = (state) => {
    return {
        pageContent: state.homepage.content,
        isFetching: state.homepage.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHomepage: () => dispatch(getHomepage()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
