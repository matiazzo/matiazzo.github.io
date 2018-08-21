import React from 'react';

import './Person.css';

// escrito em ES6
// const: constante, variável que nunca muda
// person: nome do objeto, normalmente tem o mesmo nome do arquivo (componente)
// (): lista de argumentos (vazia, nesse caso)
// => : arrow function
// props: "allow you to pass data from a parent (wrapping) component to a child (embedded) component."
const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>Sou {props.name} e tenho {props.age} anos</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
	)
};
// não muda o state da aplicação

// quando outro arquivo quiser importar esse arquivo de uma forma genérica
// vai importar person como default
export default person;