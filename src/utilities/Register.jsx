import React, { Component } from 'react';
import { auth } from '../firebase';
import { authInstance } from '../firebase/firebase';
class Register extends Component {

    doRegister = (e) => {
        let email = e.target.email.value;
        let password = e.target.passwd.value;

        alert(email + password);

        auth.doSignUp(email, password)
            .then(res => {
                var uid;
                if (res.user) {
                    console.log('registered_user', res.user);
                    uid = res.user.uid;
                    // firebase.firestore().collection('participants').doc(res.user.uid).set(res.user.uid)
                }
            })
    }
    render() {
        return(
            <form onSubmit={this.doRegister.bind(this)}>
                <input type="text" name="email" id="" style={{pointerEvents: "auto"}}/>
                <input type="password" name="passwd" id="" style={{pointerEvents: "auto"}}/>
                <input type="submit" value="Submit" style={{pointerEvents: "auto"}}/>
            </form>
        )
    }
}

export default Register;