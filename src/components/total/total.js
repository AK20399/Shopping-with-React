import React from 'react';

class total extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 123,
		};
	}

	render() {
		return (
			<div>
				<h1>Total:{this.state.total}</h1>
			</div>
		);
	}
}

export default total;
