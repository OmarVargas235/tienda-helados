import React, { useState } from 'react';
import store from '../../store';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as CarritoVacio } from '../../assets/svg/cart-empty.svg';
import { ReactComponent as CarritoFull } from '../../assets/svg/cart-full.svg';

import Cart from '../Organims/Cart';
import FlechaMostrarMenu from '../Atoms/FlechaMostrarMenu';

const Header = () => {
	
	const [cantidadCompras, guardarcantidadCompras] = useState([]);
	const [menuActivado, guardarMenuActivado] = useState(false);
	const [estadoFlecha, guardarEstadoFlecha] = useState(false);
	
	let claseMoverCarrito = menuActivado ? "movido" : "no-movido";

	store.subscribe( () => {
		const state = store.getState().productosReducer.compras;
		guardarcantidadCompras(state);
	} )
	
	//Cambia el estado para mostrar o no el componente "FlechaMostrarMenu"
	window.addEventListener('scroll', () => guardarEstadoFlecha(window.scrollY > 70 ? true : false));

	return (
		<React.Fragment>
			<nav className="navbar navbar-dark justify-content-between bg-dark">
				<div className="container">
					<div className="d-flex align-items-center">
						<Logo />
						<p className="mb-0">La casa de los helados</p>
					</div>

					<div 
						className={`${claseMoverCarrito} d-flex align-items-center`}
						onClick={ () => guardarMenuActivado(true) }
					>
						{ cantidadCompras.length === 0 ? <CarritoVacio /> : <CarritoFull /> }
					</div>
				</div>
			</nav>

			<Cart 
				menuActivado={menuActivado}
				guardarMenuActivado={guardarMenuActivado} 
			/>

			{
				(estadoFlecha && !menuActivado) ? <FlechaMostrarMenu guardarMenuActivado={ guardarMenuActivado } /> : null
			}
		</React.Fragment>
	)
}

export default Header;