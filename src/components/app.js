import React, {Component} from 'react';
import Calculator from './calculator';

export default class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (<Calculator/>);
	}
}