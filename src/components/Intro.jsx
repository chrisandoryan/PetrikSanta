import React, { Component } from 'react';
import Main from './Main';
import Modal from 'react-responsive-modal';
import { auth } from '../firebase';
import { authInstance, firestoreInstance } from '../firebase/firebase';

class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      usrObj: {},
      promptPassword: false
    }
  }

  componentWillUnmount() {
    this.setState({ promptPassword: false });
  }

  doLogin = (e) => {
    e.preventDefault();
    auth.doSignIn(e.target.email.value, e.target.password.value)
      .then(res => {
        firestoreInstance.collection("participants")
          .doc(res.user.uid)
          .get()
          .then(user => {
            if (!user.data().hasLogin) {
              this.setState({ promptPassword: true,  usrObj: res.user });
            }
            else {
              this.setState({ usrObj: res.user, isAuth: true });
            }
          })
      })
      .catch(err => {
        alert(err.message);
      })
  }

  changePassword = (e) => {
    e.preventDefault();
    var newPassword = e.target.newpassword.value;
    if (newPassword != "" && newPassword != this.state.usrObj.password) {
      this.state.usrObj.updatePassword(newPassword)
        .then(() => {
          firestoreInstance.collection("participants")
            .doc(this.state.usrObj.uid)
            .update({
              donePairing: false,
              hasLogin: true,
              beenPaired: false
            })
            .then(() => {
              this.setState({ isAuth: true, promptPassword: false });
            })
        })
        .catch(err => {
          alert(err.message);
        })
    }
    else {
      alert("Make sure you enter a different, not-empty password.");
      this.setState({ promptPassword: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal open={this.state.promptPassword} center showCloseIcon={false}>
          <form onSubmit={this.changePassword.bind(this)}>
            <h1 style={{ textAlign: "center", color: "black" }}>Please Change Your Password</h1>
            <div className="nice-wrap">
              <input className="nice-textbox" type="password" style={{ pointerEvents: "auto", border: "1px solid black" }} placeholder="New Password" name="newpassword"/>
              {/* <label className="nice-label" htmlFor="Email">Email</label> */}
            </div>
            <div className="nice-wrap">
              <div className="btn btn-2 nice-textbox" style={{display: "flex"}}>
                <button style={{ pointerEvents: "auto", margin: "0 auto" }}>I'm Ready!</button>
              </div>
            </div>
          </form>
        </Modal>
        {
          this.state.isAuth ? (
            <Main user={this.state.usrObj}></Main>
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
                <div className="btn btn-1 nice-textbox">
                  <button style={{ pointerEvents: "auto" }}>Blast!</button>
                </div>
              </div>
              <div id="candy">
                <div id="candy-loader"></div>
              </div>
              <br/>
              <h1 style={{textAlign: "center"}}>Petrik Santa &copy; 2018 by Petrik Allstars <br/> Spread Goodness!</h1>
            </form>
          )
        }
      </React.Fragment>
    )
  }
}

export default Intro;