import React from 'react';

class total extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>Total:{this.props.total}</h1>
			</div>
		);
	}
}

export default total;
