/**
 * App Component.
 *
 * @author Lena Ara <lenaa@radcube.com>
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./Table";
import logo from './ibri.ico';


const wrapper = document.getElementById('app');
	wrapper ? ReactDOM.render(

		<div>
			<nav className="navbar is-primary">
			<div className="navbar-brand">
				<div className="navbar-item">
						<img src={logo} alt='logo' />
				</div>
			</div>
			</nav>
			<h2 className="title">
				Decima Project Test
			</h2>

				<div className='loadTable'>
				</div>
		</div>,
	wrapper) : null;

  ReactDOM.render(
		<Table
		/>,document.getElementById('test-data')
	);
