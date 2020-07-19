import React from 'react';
import PropTypes from 'prop-types';

import BotonMas from '../Atoms/BotonMas';
import BotonMenos from '../Atoms/BotonMenos';

const BotonesMasMinusCart = ({ producto }) => (
	<span>
		<BotonMas 
			producto={producto}
		/>

		<BotonMenos
			producto={producto}
		/>
	</span>
)

export default BotonesMasMinusCart;

BotonesMasMinusCart.propTypes = {
	producto: PropTypes.object.isRequired
}