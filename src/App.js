import React from 'react';
import Product from './components/product/product';
import Total from './components/total/total';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.total = this.total.bind(this);
		this.state = {
			total: 0,
			productList: [
				{ name: 'Asus Rog String G', price: '73999' },
				{ name: 'Asus zenfone Max pro m2', price: '12999' },
			],
		};
	}

	showData(name) {
		alert(`You've Purchased : ${name}`);
	}

	total(price) {
		this.setState({ total: this.state.total + parseInt(price) });
	}

	render() {
		var temp = this;
		var products = this.state.productList.map(product => {
			return (
				<Product
					name={product.name}
					price={product.price}
					handlefun={this.showData}
					handleTotal={this.total}
				/>
			);
		});

		return (
			<div className='App'>
				<h1>Shopping Cart</h1>
				<hr />
				<hr />

				{products}
				<Total total={this.state.total} />
			</div>
		);
	}
}

export default App;
