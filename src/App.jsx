import React from 'react';

import Header from './Components/Pages/Header';
import ListaProductos from './Components/Pages/ListaProductos';
import AlertPadre from './Components/Molecules/AlertPadre';

import './assets/bootstrap.min.css';

const App = () => (
	<React.Fragment>
		<Header />
		<ListaProductos />
		<AlertPadre />
	</React.Fragment>
)

export default App;