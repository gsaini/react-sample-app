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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}