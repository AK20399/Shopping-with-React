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
		};
	}

	showData(name) {
		alert(`You've Purchased : ${name}`);
	}

	total(price) {
		this.setState({ total: this.state.total + parseInt(price) });
	}

	render() {
		return (
			<div className='App'>
				<h1>Shopping Cart</h1>
				<hr />
				<hr />

				<Product
					name='Asus Rog Strik G'
					price='74999'
					handlefun={this.showData}
					handleTotal={this.total}
				/>
				<Product
					name='Asus zenfone max pro m2'
					price='13999'
					handlefun={this.showData}
					handleTotal={this.total}
				/>
				<Total total={this.state.total} />
			</div>
		);
	}
}

export default App;
