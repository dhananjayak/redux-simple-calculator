export const ADD_NUMBERS = 'ADD NUMBERS';
export const SUBTRACT_NUMBERS = 'SUBTRACT NUMBERS';

export function add(op1, op2){
	console.log(op1, op2);
	return {
		type:ADD_NUMBERS,
		payload:{op1, op2}
	};
}

export function subtract(op1, op2){
	return {
		type:SUBTRACT_NUMBERS,
		payload:{op1, op2}
	};
}
