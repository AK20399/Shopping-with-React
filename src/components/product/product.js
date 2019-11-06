import React from 'react';

class product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	render() {
		return (
			<div>
				<h3>Product Working</h3>
			</div>
		);
	}
}

export default product;
