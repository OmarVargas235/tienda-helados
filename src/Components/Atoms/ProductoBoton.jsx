import React, { useState } from 'react';
import store from '../../store';
import PropTypes from 'prop-types';

import { unicoProducto, contadorProducto } from '../../helper';

const ProductoBoton = ({ data }) => {
	
	const [productosNoRepetidos, guardarProductosNoRepetidos] = useState([]);
	const [productosRepetidos, guardarProductosRepetidos] = useState([]);

	store.subscribe( () => {
		const state = store.getState().productosReducer;
		guardarProductosNoRepetidos(state.compras);
		guardarProductosRepetidos(state.arrayCantidadProductos);
	} );

	const handleAñadirProducto = () => {
		
		if ( !unicoProducto(data, productosNoRepetidos) ) {
			store.dispatch({
				type: 'AGREGAR_PRODUCTO',
				payload: data
			})
		}
		
		store.dispatch({
			type: 'AUMENTAR_PRODUCTO',
			payload: data
		})

		store.dispatch({
			type: 'CONTADOR_PRODUCTO',
			payload: contadorProducto(data, productosRepetidos)
		})

		store.dispatch({
			type: 'LISTA_ALERTS',
			payload: {nombre: data.name + " Añadido al carrito con exito", color: '14D016'}
		})
	}

	return (
		<div className="card-footer text-center">
			<button 
				className="btn btn-outline-info"
				onClick={ handleAñadirProducto }
			>Añadir al carrito</button>
		</div>
	)
}

export default React.memo(ProductoBoton);

ProductoBoton.propTypes = {
	data: PropTypes.object.isRequired
}