import React, { useState } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

import ProductoCart from './ProductoCart';
import VaciarCerrarCart from '../Molecules/VaciarCerrarCart';
import TramitarPedido from '../Molecules/TramitarPedido';

const Cart = ({ menuActivado, guardarMenuActivado }) => {

	const [carritoCompras, guardarCarritoCompras] = useState([]);
	const [contadorProducto, guardarContadorProducto] = useState({});
	const [altura, guardarAltura] = useState(window.innerHeight);

	store.subscribe( () => {
		const stateProductos = store.getState().productosReducer;
		const stateUtils = store.getState().utilsReducer;
		guardarCarritoCompras(stateProductos.compras);
		guardarContadorProducto(stateUtils.contadorProductos);
	} );
	
	//Se le agrega clase con una transiccicon, al componente.
	let claseMoverCart = menuActivado ? "cart-movido" : "cart-no-movido";
	
	const index = carritoCompras.findIndex(element => element.id === contadorProducto.id);
	
	//Agrega propiedad "cantidadProducto" al producto encontrado por su indice.
	if (index !== -1) carritoCompras[index].cantidadProducto = contadorProducto.cont;

	//Elimina el producto y el precio del producto lo resetea a "cero".
	const vaciarCarrito = (elemento = null) => {
		store.dispatch({
			type: 'VACIAR_CARRITO'
		})

		if (elemento === 'tramitarPedido') {
			store.dispatch({
				type: 'LISTA_ALERTS',
				payload: {nombre: 'Todas sus compras se han realizado con exito.', color: 'D01445'}
			})
		}
	}
	
	//Actualiza la altura del "Cart" cada vez que cambia de tamaño la pantalla.
	window.addEventListener('resize', () => guardarAltura(window.innerHeight));

	return (
		<div className={`cart pt-3 px-5 px-md-0 ${claseMoverCart}`} style={{height: altura + "px"}}>
			<VaciarCerrarCart 
				guardarMenuActivado={guardarMenuActivado}
				vaciarCarrito={vaciarCarrito}
			/>

			{
				carritoCompras.map(element => (
					<ProductoCart 
						key={element.id}
						producto={element}
					/>
				))
			}

			<TramitarPedido 
				carritoCompras={carritoCompras}
				vaciarCarrito={vaciarCarrito}
			/>
		</div>
	)
}

export default Cart;

Cart.propTypes = {
	menuActivado: PropTypes.bool,
	guardarMenuActivado: PropTypes.func.isRequired
}