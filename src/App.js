import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Register from './utilities/Register';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			// <Intro></Intro>
			<Register></Register>
		);
	}
}

export default App;