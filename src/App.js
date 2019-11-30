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
        <Header title="My scoreboard" players={this.state.players} />
        {
          this.state.players.map((player) => (
            // 속성으로 handleRemovePlayer 함수 전달
            <Player name={player.name} id={player.id} key={player.id}
                    score={player.score}
                    changeScore = {this.handleChangeScore} // () 괄호가 있으면안됨. ()는 함수 호출, 함수 자체를 넘겨야하므로 no ()
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

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore:', id, delta)
    this.setState(prevState => {
      // 새로운 배열을 리턴하라 : deep copy
      const players = [ ...prevState.players ]; // ... spread 연산자 배열앞에 ... 이 배열 안에 있는 내용물을 가져와서 펼쳐라
      players.forEach(player => {
        if(player.id == id){
          player.score += delta
        }
      })
      return { players }
    })
  }
}


export default App;
