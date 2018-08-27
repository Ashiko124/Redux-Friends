import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {friendsfetching, friendsSaving} from './Actions/index';


class App extends Component {
    state = {
      friend: ''
    }


  

  componentDidMount () {
    this.props.friendsfetching()
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
           {this.props.friends.map(friend => {
            return (
            <li key={friend.name}> {friend.name} </li>
            )
          })}
        </div>
        <div>
          <input type= 'text' placeholder = 'Enter Friend' name= 'friend' value= {this.state.friend} onChange ={e => this.setState({ [e.target.name]: e.target.value})} />
        </div>
        <button onClick={() =>{ this.props.friendsSaving({friend: this.state.friend})
         this.setState({friend: ''})} }>
        Add Friend Here!
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    friends: state.friends,
    friendPending: state.friendPending,
    friendSaving: state.friendSaving,
    friendUpdating: state.friendUpdating,
    friendDeleteing: state.friendDeleteing, 
    errorFriends: state.errorFriends
  }
}
export default connect(mapStateToProps, {friendsfetching, friendsSaving})(App);
