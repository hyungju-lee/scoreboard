import React from 'react';

export class Stopwatch extends React.Component {
	tickRef; // 속성정의 (클래스 바로 밑에 적으면 속성이 됨)
	state = {
		isRunning: false,
		timer: 0
	}

	handleStopwatch(){
		this.setState(prevState => ({isRunning: !prevState.isRunning}))
	}

	render() {
		return (
			<div className="stopwatch">
				<h1 className="h1">StopWatch</h1>
				<span className="stopwatch-time">{this.state.timer}</span>
				<button onClick={this.handleStopwatch.bind(this)}>{this.state.isRunning ? "Stop" : "Start"}</button>
				<button onClick={() => this.setState({timer: 0})}>Reset</button>
			</div>
		)
	}

	tick = () => {
		if(this.state.isRunning){
			this.setState(prevState => ({timer: prevState.timer + 1}))
		}
	}

	// 리액트 도큐먼트 라이프사이클 공부
	// 네트워크로 데이터 fetch, 3rd 라이브러리 초기화 이걸 componentDidMount에서 해야됨
	// 돔이 랜더링된 직후 호출
	componentDidMount() {
		console.log('componentDidMount');
		this.tickRef = setInterval(this.tick, 1000);
	}
	// 돔 파괴되기 직전 호출
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}
}