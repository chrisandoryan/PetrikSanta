import React, { Component } from 'react';
import Main from './Main';
import { auth } from '../firebase';

class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      usrObj: {}
    }
  }

  doLogin = (e) => {
    e.preventDefault();
    auth.doSignIn(e.target.email.value, e.target.password.value)
      .then(res => {
        console.log(res);
        this.setState({ isAuth: true, usrObj: res.user });
        console.log('dudu', this.state.usrObj);
      })
      .catch(err => {
        alert(err.message);
      })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.isAuth ? (
            <Main uid={this.state.usrObj.uid}></Main>
          ) : (
            <form onSubmit={this.doLogin.bind(this)}>
              <h1 style={{ textAlign: "center", fontSize: 80, margin: 30 }}>Hi! Mind to Join?</h1>
              <div className="nice-wrap">
                <input className="nice-textbox" type="text" style={{ pointerEvents: "auto" }} placeholder="Email" name="email"/>
                {/* <label className="nice-label" htmlFor="Email">Email</label> */}
              </div>
              <div className="nice-wrap">
                <input className="nice-textbox" type="password" style={{ pointerEvents: "auto" }} placeholder="Password" name="password"/>
                {/* <label className="nice-label" htmlFor="Password">Password</label> */}
              </div>
              <div className="nice-wrap">
                <div class="btn btn-1 nice-textbox">
                  <button style={{ pointerEvents: "auto" }}>Blast!</button>
                </div>
              </div>
              <div id="candy">
                <div id="candy-loader"></div>
              </div>
            </form>
          )
        }
      </React.Fragment>
    )
  }
}

export default Intro;