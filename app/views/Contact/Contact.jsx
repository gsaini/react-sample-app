import React from 'react';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = props;
    }


    render() {
        return (
            <div className="contact-container">
                <h1>Contact</h1>
            </div>
        );
    }
}