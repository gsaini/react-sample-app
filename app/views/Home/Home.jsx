import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = props;
    }

    render() {
        return (
            <div className="home-container">
                <h1>Home</h1>
            </div>
        );
    }
}