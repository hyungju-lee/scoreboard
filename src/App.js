import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";




class App extends React.Component {
  state = {
    players : [
      {id: 1, name:'LDK', score: 10},
      {id: 2, name:'LHJ', score: 20},
      {id: 3, name:'KMG', score: 30},
      {id: 4, name:'HIV', score: 40}
    ]
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={11} />
        {
          this.state.players.map((player) => (
            // 속성으로 handleRemovePlayer 함수 전달
            <Player name={player.name} id={player.id} key={player.id}
                    score={player.score}
                    removePlayer={this.handleRemovePlayer}/>
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
