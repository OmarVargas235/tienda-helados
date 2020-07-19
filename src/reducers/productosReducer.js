const stateInitial = {
	compras: [],
	arrayCantidadProductos: [],
}

export default function(state = stateInitial, action) {
	switch (action.type) {
		case 'AGREGAR_PRODUCTO': 
			return {
				...state,
				compras: [...state.compras, action.payload]
			}

		case 'AUMENTAR_PRODUCTO': 
			return {
				...state,
				arrayCantidadProductos: [...state.arrayCantidadProductos, action.payload]
			}

		case 'DECREMENTAR_PRODUCTO':
			const array = state.arrayCantidadProductos;
			const index = array.findIndex(element => element.id === action.payload.id);

			array.splice(index, 1);

			return {
				...state,
				arrayCantidadProductos: array
			}

		case 'QUITAR_PRODUCTO':
			return {
				...state,
				compras: state.compras.filter(element => element.id !== action.payload.id),
				arrayCantidadProductos: state.arrayCantidadProductos.filter(element => element.id !== action.payload.id)
			}

		case 'VACIAR_CARRITO': 
			return {
				...state,
				compras: [],
				arrayCantidadProductos: []
			}

		default: return state;
	}
}