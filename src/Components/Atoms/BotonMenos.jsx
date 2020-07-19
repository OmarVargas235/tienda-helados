import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

import { contadorProducto } from '../../helper';
import { ReactComponent as Papelera } from '../../assets/svg/papelera.svg';

const BotonesMasMinusCart = ({ producto }) => {

	const [productosRepetidos, guardarProductosRepetidos] = useState([]);

	useEffect(() => {
		let mount = true;
		
		store.subscribe( () => {
			const state = store.getState().productosReducer.arrayCantidadProductos;
			mount && guardarProductosRepetidos(state);
		} );

		return () => mount = false;

	}, []);

	const handleRestarProducto = () => {

		store.dispatch({
			type: 'DECREMENTAR_PRODUCTO',
			payload: producto
		})

		store.dispatch({
			type: 'CONTADOR_PRODUCTO',
			payload: contadorProducto(producto, productosRepetidos, 'decrementar')
		})
	}

	const handleQuitarProducto = () => {
		store.dispatch({
			type: 'QUITAR_PRODUCTO',
			payload: producto
		})
	}

	return (
		<button 
			className="btn btn-info text-center"
			onClick={ producto.cantidadProducto === 1 ? handleQuitarProducto : handleRestarProducto }
		> { producto.cantidadProducto === 1 ? <span><Papelera /></span> : <span>-</span> }
		</button>
	)
}

export default BotonesMasMinusCart;

BotonesMasMinusCart.propTypes = {
	producto: PropTypes.object.isRequired
}