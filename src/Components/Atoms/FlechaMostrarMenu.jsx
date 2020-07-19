import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as FlechaIzquierda } from '../../assets/svg/flecha-izquierda.svg';

const FlechaMostrarMenu = ({ guardarMenuActivado }) => {

	const [claseMostrarFlecha, guardarClaseMostrarFlecha] = useState('');
	
	//Añade clase con efecto de transaccion.
	setTimeout(() => guardarClaseMostrarFlecha('mostrarFlecha'), 1);
	
	return (
		<div 
			className={`flecha-izquierda ${claseMostrarFlecha}`}
			onClick={ () => guardarMenuActivado(true) }
		>
			<FlechaIzquierda />
		</div>
	)	
}

export default FlechaMostrarMenu;

FlechaMostrarMenu.propTypes = {
	guardarMenuActivado: PropTypes.func.isRequired
}