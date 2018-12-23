import React, { Component } from 'react';
import Main from './Main';

class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }

  doLogin = () => {
    this.setState({ isAuth: true });
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.isAuth ? (
            <Main></Main>
          ) : (
            <React.Fragment>
              <h1 style={{ textAlign: "center", fontSize: 80, margin: 30 }}>Hi! Mind to Join?</h1>
              <div className="nice-wrap">
                <input className="nice-textbox" type="text" style={{ pointerEvents: "auto" }} placeholder="Email" />
                {/* <label className="nice-label" htmlFor="Email">Email</label> */}
              </div>
              <div className="nice-wrap">
                <input className="nice-textbox" type="password" style={{ pointerEvents: "auto" }} placeholder="Password" />
                {/* <label className="nice-label" htmlFor="Password">Password</label> */}
              </div>
              <div className="nice-wrap">
                <div class="btn btn-1 nice-textbox">
                  <button href="#" style={{ pointerEvents: "auto" }} onClick={() => this.doLogin()}>Blast!</button>
                </div>
              </div>
              <div id="candy">
                <div id="candy-loader"></div>
              </div>
            </React.Fragment>
          )
        }
      </React.Fragment>
    )
  }
}

export default Intro;