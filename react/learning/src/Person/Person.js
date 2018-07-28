import React from 'react';

// escrito em ES6
// const: constante, variável que nunca muda
// person: nome do objeto, normalmente tem o mesmo nome do arquivo (componente)
// (): lista de argumentos (vazia, nesse caso)
// => : arrow function
// props: "allow you to pass data from a parent (wrapping) component to a child (embedded) component."
const person = (props) => {
	return (
		<div>
			<p>Sou {props.name} e tenho {props.age} anos <span>{props.children}</span></p>
		</div>
		)
};

// quando outro arquivo quiser importar esse arquivo de uma forma genérica
// vai importar person como default
export default person;