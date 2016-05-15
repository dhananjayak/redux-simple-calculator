import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, subtract} from '../actions';

class Calculator extends Component
{
	constructor(props){
		super(props);

		this.state = {op1:0, op2:0};
	}

	op1Change(event){
		console.log(event.target.value);
		this.setState({op1:parseInt(event.target.value)});
	}

	op2Change(event){
		this.setState({op2:parseInt(event.target.value)});
	}

	render(){
		return (<div>
					<h3>Simple Calculator</h3>
					<div>
						<div>
					    	<span>
					    		<input type="text" onChange={this.op1Change.bind(this)} />
					    	</span>
					    	<span>
					    		<input type="text" onChange={this.op2Change.bind(this)}  />
					    	</span>
							<span>
					    		<input type="text" readOnly={true} value={this.props.result} />
					    	</span>					    	
					    </div>
					    <div>
					    	<button className="btn btn-primary" 
					    			onClick={()=>this.props.add(this.state.op1, this.state.op2)}>Add</button>
					    	<button className="btn btn-primary" 
					    	        onClick={()=>this.props.subtract(this.state.op1, this.state.op2)}>Subtract</button>
					    </div>
					</div>
				</div>);
	}
}

function bindStateToProps(state){
	return {
		result:state.result
	};
}

export default connect(bindStateToProps, {add,subtract})(Calculator);