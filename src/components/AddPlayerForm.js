import React from 'react';

export class AddPlayerForm extends React.Component {
	state = {
		value : ''
	}

	handleValueChange(e){
		console.log(e);
		this.setState({value:e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault();

		// HTML 5 required 등 속성 쓰지않는다면 유효성 체크해야됨
		// type email
		// minlength, required, maxlength ... 등등
		const player = document.getElementById("player");
		console.log(player.validity.valueMissing);
		console.log(player.validity.valid);
		if(!player.validity.valid){
			// isNameValid = true; 에러문구 컨디셔널 렌더링
			return;
		}

		this.props.addPlayer(this.state.value);
		// 폼 초기화
		this.setState({value: ''}) // 폼 input부분 초기화
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit.bind(this)} noValidate>
				<input id="player" type="text" className="input" value={this.state.value}
							 onChange={this.handleValueChange.bind(this)}
							 placeholder="enter a player's name" required/>
				<input type="submit" className="input" value="Add Player"/>
			</form>
		)
	}
}