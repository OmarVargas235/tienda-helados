import React, { useState, useEffect } from 'react';
import store from '../../store';

import Alert from '../Atoms/Alert';

const AlertPadre = () => {	
	
	const [alerts, guardarAlerts] = useState([]);
	const [contenedorAlerts, guardarContenedorAlert] = useState('');

	const contenedorAlertsRef = React.createRef();

	useEffect(() => {
		guardarContenedorAlert(contenedorAlertsRef.current);

		store.subscribe(() => {
			const state = store.getState().utilsReducer.arrayAlerts;
			guardarAlerts(state);
		});

	}, [contenedorAlertsRef]);

	let top = window.scrollY > 66 ? 10 : 70;
	
	return (
		<div 
			ref={contenedorAlertsRef}
			style={{ top: top + "px" }}
			className="contenedor-alerts">
			{
				alerts.map((element, index) => (
					<Alert 
						key={index}
						data={element}
						contenedorAlerts={contenedorAlerts}
						alerts={alerts}
					/>
				))
			}
		</div>
	)
}

export default AlertPadre;