export const unicoProducto = (data, array) => {
	for (let element of array) {
		if (data.id === element.id) {
			return true;
		}
	}
}

export const contadorProducto = (data, array, tipo = "aumentar") => {
	
	let cont = tipo === 'decrementar' ? 0 : 1;

	array.forEach(element => data.id === element.id && cont++);
	
	return {
		cont,
		id: data.id
	};
}