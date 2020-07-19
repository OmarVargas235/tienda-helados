import React from 'react';
import productosJSON from '../../dbProducts.json';

import Producto from '../Organims/Producto';

const ListaProductos = () => (
	<div className="mt-5 container px-5 px-sm-0 lista-productos">
		<div className="row">
			{
				productosJSON.map(element => (
					<Producto 
						key={element.id}
						data={element}
					/>
				))
			}
		</div>
	</div>
)

export default ListaProductos;