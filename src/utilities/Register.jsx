import React, { Component } from 'react';
import { auth } from '../firebase';
import { authInstance, firestoreInstance } from '../firebase/firebase';
class Register extends Component {

    doRegister = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.passwd.value;
        let initial = e.target.initial.value;
        let generation = "18-1";
        let gender = e.target.gender.value;

        alert(email + password);

        auth.doSignUp(email, password)
            .then(res => {
                var uid;
                if (res.user) {
                    console.log('registered_user', res.user);
                    uid = res.user.uid;
                    firestoreInstance.collection('participants').doc(res.user.uid).set({
                        email: email,
                        password: password,
                        initial: initial,
                        generation: generation,
                        gender: gender,
                        hasLogin: false,
                        donePairing: false 
                    })
                }
            })
    }
    render() {
        return(
            <form onSubmit={this.doRegister.bind(this)}>
                <input type="text" name="email" id="" style={{pointerEvents: "auto"}} placeholder="email"/>
                <input type="text" name="initial" id="" style={{pointerEvents: "auto"}} placeholder="initial"/>
                <input type="text" name="name" id="" style={{pointerEvents: "auto"}} placeholder="name"/>
                <input type="text" name="gender" id="" style={{pointerEvents: "auto"}} placeholder="gender"/>
                <input type="password" name="passwd" id="" style={{pointerEvents: "auto"}}/>
                <input type="submit" value="Submit" style={{pointerEvents: "auto"}}/>
            </form>
        )
    }
}

export default Register;