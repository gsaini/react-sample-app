import React from 'react';

export default class About extends React.Component {
	
	constructor(props) {
		super(props);
		this.props = props;
		this.state = props;
	}

	render() {
		return (
			<div className="about-container">
				<h1>About</h1>
			</div>
		);
	}
}
