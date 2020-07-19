import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Close } from '../../assets/svg/close.svg';
import { ReactComponent as Papelera } from '../../assets/svg/garbage.svg';

const VaciarCerrarCart = ({ guardarMenuActivado, vaciarCarrito }) => (
	<div className="d-flex justify-content-between align-items-center px-3 lista-productos-carrito">
		<p className="mb-0"> 
			<Close onClick={ () => guardarMenuActivado(false) } />
			<span className="ml-2">Carrito</span> 
		</p>
		
		<p className="mb-0 d-flex align-items-center"> 
			<span className="mr-2 d-flex align-items-center">Vaciar</span> 
			<span onClick={ vaciarCarrito }> <Papelera /> </span>
		</p>
	</div>
);

export default React.memo(VaciarCerrarCart);

VaciarCerrarCart.propTypes = {
	guardarMenuActivado: PropTypes.func.isRequired,
	vaciarCarrito: PropTypes.func.isRequired
}