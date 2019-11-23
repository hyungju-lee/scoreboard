import React from 'react';
import './App.css';

const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Player: {props.totalPlayers}</span>
    </header>
  );
}

class Counter extends React.Component {
  state = {
    score: 11
  };

  incrementScore = () => {
    this.setState((prevState)=>({score: prevState.score + 1}))
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  }
}

const Player = (props) => (
  <div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
      {props.name}
		</span>
    <Counter/>
  </div>
);

class App extends React.Component {
  state = {
    players : [
      {id: 1, name:'LDK'},
      {id: 2, name:'LHJ'},
      {id: 3, name:'KMG'},
      {id: 4, name:'HIV'}
    ]
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={11} />
        {
          this.state.players.map((player) => (
            // 속성으로 handleRemovePlayer 함수 전달
            <Player name={player.name} id={player.id} key={player.id} removePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    )
  }
  handleRemovePlayer = (id) => {
    console.log('id', id);
    const players = this.state.players.filter(player => player.id !== id);
    console.log(players);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      return { players }
    })
  }
}


export default App;
