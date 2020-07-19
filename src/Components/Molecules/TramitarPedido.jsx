import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

const TramitarPedido = ({ carritoCompras, vaciarCarrito }) => {

	const [elemento, guardarElemento] = useState('');
	const [alturaElemento, guardarAlturaElemento] = useState('');

	useEffect(() => {
		guardarAlturaElemento(elemento.offsetHeight);

		window.addEventListener('resize', () => guardarAlturaElemento(elemento.offsetHeight));

		return () => window.removeEventListener('resize', () => guardarAlturaElemento(elemento.offsetHeight));

	}, [elemento]);

	store.subscribe( () => {
		const state = store.getState().utilsReducer.alturaElement;
		guardarElemento(state);
	} );
	
	/*
		elemento = producto en el cart.
	carritoCompras.length * alturaElemento = a la altura de todos los productos agregados al componente "Cart"
		54 = a la altura del componente "VaciarCerrarCart"
	*/
	let topTramitarPedido = carritoCompras.length * alturaElemento > (window.innerHeight-(alturaElemento+54)) 
			? (carritoCompras.length * (alturaElemento - 2)) + 67
			: window.innerHeight - 128;

	const precioTotal = carritoCompras.reduce((acum, el) => el.price * el.cantidadProducto + acum, 0);

	return (
		<div 
			className="tramitar-pedido p-3 mt-3" 
			style={{top: topTramitarPedido + "px"}}
		>
			<p className="d-flex justify-content-between">
			<span>Total a pagar:</span> <span>{precioTotal.toFixed(2)} $</span></p>
		
			<button 
				className="btn btn-block btn-info"
				onClick={ () => precioTotal > 0 && vaciarCarrito('tramitarPedido') }
			>Tramitar pedido</button>
		</div>
	)

};

export default React.memo(TramitarPedido);

TramitarPedido.propTypes = {
	carritoCompras: PropTypes.array.isRequired,
	vaciarCarrito: PropTypes.func.isRequired
}