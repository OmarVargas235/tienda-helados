const stateInitial = {
	contadorProductos: {},
	arrayAlerts: [],
	alturaElement: ''
}

export default function(state = stateInitial, action) {
	switch (action.type) {
		case 'CONTADOR_PRODUCTO':
			return {
				...state,
				contadorProductos: action.payload
			}

		case 'LISTA_ALERTS': 
			return {
				...state,
				arrayAlerts: [...state.arrayAlerts, action.payload]
			}

		case 'ELIMINAR_ALERTS':

			return {
				...state,
				arrayAlerts: []
			}

		case 'ALTURA_ELEMENTO':
			return {
				...state,
				alturaElement: action.payload
			}

		default: return state;
	}
}