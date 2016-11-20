import React from 'react';
import { connect } from 'react-redux';

import { getHomepage } from 'actions/index.js';

import Home from 'components/home/index.jsx';

class HomeContainer extends React.Component {
    componentWillMount() {
        if (!this.props.content) {
            this.props.getHomepage();
        }
    }
    render() {
        const { content, isFetching } = this.props;
        return isFetching ? null : <Home content={content}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.homepage.content,
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
)(HomeContainer);
