import React from 'react';

class product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	buy() {
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return (
			<div>
				<h2>Product Name</h2>
				<h3>Purchased : {this.state.count}</h3>
				<button onClick={this.buy.bind(this)}>Buy</button>
				<hr />
			</div>
		);
	}
}

export default product;
