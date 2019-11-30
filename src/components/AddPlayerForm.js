import React from 'react';

export class AddPlayerForm extends React.Component {
	state = {
		value : ''
	}

	handleValueChange(e){
		console.log(e);
		this.setState({value:e.target.value})
	}

	render() {
		return (
			<form action="" className="form">
				<input type="text" className="input" value={this.state.value}
							 onChange={this.handleValueChange.bind(this)}
							 placeholder="enter a player's name"/>
				<input type="submit" className="input" value="Add Player"/>
			</form>
		)
	}
}