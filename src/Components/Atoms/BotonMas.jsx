import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

import { contadorProducto } from '../../helper';

const BotonMas = ({ producto }) => {

	const [productosRepetidos, guardarProductosRepetidos] = useState([producto]);

	useEffect(() => {
		let mount = true;

		store.subscribe( () => {
			const state = store.getState().productosReducer.arrayCantidadProductos;
			mount && guardarProductosRepetidos(state);
		} );

		return () => mount = false;

	}, []);

	const handleAumentarCantidadProducto = () => {

		store.dispatch({
			type: 'AUMENTAR_PRODUCTO',
			payload: producto
		})

		store.dispatch({
			type: 'CONTADOR_PRODUCTO',
			payload: contadorProducto(producto, productosRepetidos)
		})
	}

	return (
		<button 
			className="btn btn-info mr-1"
			onClick={ handleAumentarCantidadProducto }
		><span>+</span>
		</button>
	)
}

export default React.memo(BotonMas);

BotonMas.propTypes = {
	producto: PropTypes.object.isRequired
}