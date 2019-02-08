/**
 * Render table based on the data from the backend and display it on the frontend.
 *
 * @author Lena Ara <lenaa@radcube.com>
 */

import React, { Component } from 'react';
import key from 'weak-key';

class DisplayTable extends Component {

	constructor(props) {
		super(props);
	//Efficient early binding. To be used for future functions.
	}


	render() {
		const { data } = this.props;
			return (
			<table className='table is-striped loadTable' align='center'>
				<thead>
					<tr>
						Object.entries(data[0]).map(el => <th key={key(el)}>{el[0]}</th>)}
					</tr>
				</thead>
				<tbody>
					{data.map((el) => (
						<tr key={el.auto_increment_id}>
							{Object.entries(el).map(el => <td key={key(el)}>{el[1]}</td>)}
						</tr>
					)
					)}
				</tbody>
			</table>
		)
	}
}

export default DisplayTable;
