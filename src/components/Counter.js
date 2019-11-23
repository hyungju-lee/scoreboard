import React from 'react';

export class Counter extends React.Component {

	//incrementScore = () => {
		//this.setState((prevState)=>({score: prevState.score + 1}))
	//}

	// 부모에게 score 받았으므로 +, - 버튼눌렀을 때도 부모에게 요청
	// this.props.changeScore(this.props.id, -1) 면 함수 호출
	// 아래에서 함수 호출하면 안되므로
	// {() => this.props.changeScore(this.props.id, -1)} 이렇게 컬리브리스로 wrapping해야됨. 그럼 함수 호출이안되고 파라미터가 넘어감
	// 함수 표현식처럼 넣어야함!
	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"
								onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment"
								onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
			</div>
		)
	}
}