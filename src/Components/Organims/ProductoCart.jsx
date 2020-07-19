import React, { useEffect } from 'react'; 
import PropTypes from 'prop-types';
import store from '../../store';

import BotonesMasMinusCart from '../Molecules/BotonesMasMinusCart';

const ProductoCart = ({ producto }) => {

	const alturaDivisorRef = React.createRef();

	useEffect(() => {
		store.dispatch({
			type: 'ALTURA_ELEMENTO',
			payload: alturaDivisorRef.current
		});
	}, [alturaDivisorRef]);

	return (
		<div ref={alturaDivisorRef} 
			 className="row divisor pr-3 py-3 ml-0" >
			<div className="col-3 col-sm-2 col-md-3 col">
				<img src={producto.image} alt={producto.image} className="img-top img-fluid" />
			</div>
		
			<div className="col-9 col-sm-10 col-md-9">
				<div className="divisor-pequeno pb-1">
					<p className="mb-1 nombre-producto">{producto.name}</p>
					<p className="mb-0">{ producto.price } $ / Ud.</p>
				</div>

				<div className="mt-2">
					<span className="mr-3">En carrito: {producto.cantidadProducto} ud.</span>

					<BotonesMasMinusCart 
						producto={producto}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProductoCart;

ProductoCart.propTypes = {
	producto: PropTypes.object
}