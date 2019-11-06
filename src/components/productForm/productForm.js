import React from 'react';

class total extends React.Component {
	submit(e) {
		e.preventDefault();
		let name = document.querySelector('#name').value;
		let price = document.querySelector('#price').value;

		alert(`Name is :${name} and price is : ${price}`);

		document.querySelector('#name').value = '';
		document.querySelector('#price').value = '';
	}

	render() {
		return (
			<form onSubmit={this.submit}>
				<input type='text' placeholder='Product Name' id='name' />
				<br />
				<input type='text' placeholder='Product Price' id='price' />
				<br />
				{/* <button onClick={this.submit}>Submit</button> */}
				<button>Submit</button>
				<hr />
			</form>
		);
	}
}

export default total;
