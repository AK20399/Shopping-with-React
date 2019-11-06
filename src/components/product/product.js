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
		this.props.handleTotal(this.props.price);
	}

	show() {
		this.props.handlefun(this.props.name);
	}

	render() {
		return (
			<div>
				<h2>Product Name : {this.props.name}</h2>
				<h2>Product Price : {this.props.price}</h2>
				<h3>Purchased : {this.state.count}</h3>
				<button onClick={this.buy.bind(this)}>Buy</button>
				<br />
				<button onClick={this.show.bind(this)}>Show</button>
				<hr />
			</div>
		);
	}
}

export default product;
