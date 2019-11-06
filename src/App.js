import React from 'react';
import Product from './components/product/product';
import Total from './components/total/total';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='App'>
				<Product name='Asus Rog Strik G' price='74999' />
				<Product name='Asus zenfone max pro m2' price='13999' />
				<Total />
			</div>
		);
	}
}

export default App;
