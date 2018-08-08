import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// extends = App é Component + o que eu escrever aqui dentro
class App extends Component {
	// state só funciona se algo tem "extends Component"
	state  = {
		// array
		persons: [
		{ nome: 'Andre', idade: 27},
		{ nome: 'Giove', idade: 26}
		]
	}

	switchNameHandler = (newName) => {
	// console.log('Foi clicado');
	// funciona com state, que só funciona com 'extends Component'
	this.setState({
		persons: [
		{ nome: newName, idade: 27},
		{ nome: 'Giove', idade: 21}
		]
	});
}

	// render() renderiza o app
	// "this" em Person se refere a "App"
	render() {
		return (
			<div className="App">
			<h1>Oie</h1>
			<p>Funfa</p>
			<button onClick={() => this.switchNameHandler('Deds')} >Trocar nome</button>
			<Person 
			name={this.state.persons[0].nome}
			age={this.state.persons[0].idade}/>
			<Person
			name={this.state.persons[1].nome}
			age={this.state.persons[1].idade}
			click={this.switchNameHandler.bind(this, 'Dedeco')}>e gosto de cavalos</Person>
			</div>
			);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Funciona?'));
	}

	// 01. Em Person.js, criei o componente, a casca
	// 02. Aqui, os elementos 'html' Person retomam o que estipulei no componente: os attr name e age
	// 03. Daí, cada um desses attr é definido no objeto pai (App) e referenciado dentro dos elementos 'html'
	// 04. Então: o componente (Person.js) pega da referência de "aqui vai o componente" (<Person/>) que, por sua vez, pega do objeto pai (App)
}
// exporta para ser importado pelo index.js
export default App;
