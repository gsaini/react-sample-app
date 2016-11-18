import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = props;
    }

    render() {
        return (
            <div className="main-container">
                <ul>
                    <li><Link to="home">home</Link></li>
                    <li><Link to="about">about</Link></li>
                    <li><Link to="contact">contact</Link></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}