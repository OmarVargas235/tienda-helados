import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import store from '../../store';

const Alert = ({ data, contenedorAlerts, alerts }) => {

	const [claseAlert, guardarClaseAlert] = useState('');

	useEffect(() => {
		//Variable que comprueba si el componete a sido desmontado.
		let mounted = true;

		setTimeout(() => mounted && guardarClaseAlert("agregarAlert"), 10);

		setTimeout(() => mounted && guardarClaseAlert(""), 1500);
		setTimeout(() => mounted && guardarClaseAlert("quitarAlert"), 1700);

		return () => mounted = false; 

	}, [data]);

	setTimeout(() => {
		if (contenedorAlerts.children.length === alerts.length) {
			store.dispatch({
				type: 'ELIMINAR_ALERTS'
			})
		}

	}, 2000);

	return (
		<div
			style={{ 
				backgroundColor: "#" + data.color,
			}}
			className={`alerta d-flex justify-content-center align-items-center py-2 px-5 mb-3 ${claseAlert}`}> 
			{ data.nombre }
		</div>
		
	)
}

export default React.memo(Alert);

Alert.propTypes = {
	data: PropTypes.object.isRequired
}