import React from 'react';
import PropTypes from 'prop-types';

import ProductoBoton from '../Atoms/ProductoBoton';

const Producto = ({ data }) => (
	<div className="col-sm-6 col-lg-4 mb-4">
		<div className="card">
			<img src={data.image} alt={data.image} className="img-top img-fluid" />
		
			<div className="card-body">
				<p className="card-text">{data.name}</p>
				<p className="card-text">{data.extraInfo}</p>
				<p className="card-text">{data.price} $ / Unidad</p>
			</div>

			<ProductoBoton 
				data={data}
			/>
		</div>
	</div>
)

export default Producto;

Producto.propTypes = {
	data: PropTypes.object.isRequired
}