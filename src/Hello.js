import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component{
	render(){
		return (
		<div className = 'f2 tc'>
		<h1> Hello world yo</h1>
		<p>{this.props.greeting}</p>
		</div>
		)
	}
}

export default Hello;