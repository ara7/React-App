/**
 * Render table based on the data from the backend.
 *
 * @author Lena Ara <lenaa@radcube.com>
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewTable from './DisplayTable';

class Table extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		let initialdata = [];
		fetch('api/decimaApp')
		.then(response => {
		return response.json();
		}).then(data => {
			initialdata = data.map((el) => {
			return el
		});
		//console.log('Yo', initialdata);
		ReactDOM.render(
			<div>
				<NewTable
					data={initialdata}
				/>
			</div>, document.getElementById('test-data')
		)
	});
	}
	render() {
		return(
			<div>

			</div>
		)
	}
}
export default Table;
