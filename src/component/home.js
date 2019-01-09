import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {updateUser} from './store/actions.js/authActions'

import {connect} from 'react-redux'


class Home extends Component {

    componentDidMount() {
        this.props.updateUser({name: 'kashif', age: 51})
      }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          {this.props.userName}
          {/* {        this.props.updateUser({name: 'kashif', age: 51})
    } */}
          {console.log(this.props)}
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


function mapStateToProps(state){

    return({
    //   userName:state.authReducers.fname
      user: state.authReducers.user

    })
  }
  
  function mapDispatchToProps(dispatch){
    return({
        updateUser: (user) => dispatch(updateUser(user))
    })
  }

export default connect(mapStateToProps,mapDispatchToProps) (Home);
