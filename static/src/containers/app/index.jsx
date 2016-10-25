import React from 'react';
import Headroom from 'headroom.js';

import './styling.scss';

import Header from 'components/header/index.jsx';
import Footer from 'components/footer/index.jsx';

class App extends React.Component {
    componentDidMount() {
        var myElement = document.querySelector(".heading-band");
        var headroom  = new Headroom(myElement);
        headroom.init();
    }
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="main-body">
                    <div className="content">
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
