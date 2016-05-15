import {ADD_NUMBERS, SUBTRACT_NUMBERS} from '../actions';

const InitialState = 0;

export default function(state = InitialState, action){
	var {op1=0, op2=0} = action.payload || {};

	switch (action.type){
		case ADD_NUMBERS:{			
			return (op1 + op2);
		}
		case SUBTRACT_NUMBERS:{
			return (op1 - op2);	
		}
	}

	return state;
}