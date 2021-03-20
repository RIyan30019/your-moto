
import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,

        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        user: ''
    });
    const [googleUser, setGoogleUser] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location=useLocation();
    
  let { from } = location.state || { from: { pathname: "/" } };
  


    const handleBlur = (e) => {

        let isFieldValid = true;

        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);


        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasCharacter = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasCharacter;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            // console.log(newUserInfo);
            setUser(newUserInfo);

        }
    }

    const handleLogin = (e) => {

        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {

                    var user = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    updateUserInfo(user.name);

                })
                .catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {

                    var user = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);

                })
                .catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });

        }


        e.preventDefault();
    }
    // const handleConfirmPassword =(event) =>{
    //     if (event.target.value !== this.state.password) {
    //       console.log('error');
    //       }



 
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setGoogleUser(googleUser);
                console.log(user);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, errorCode);
            });


    }
    const updateUserInfo = name => {

        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
          
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    return (
        <div className="container ">


            <form className="login-form" onSubmit={handleLogin}>
                {newUser &&
                    <div className="mb-3">

                        <label for="exampleInputEmail1" className="form-label">Enter your Name</label>
                        <input type="name" className="form-control" name="name" onBlur={handleBlur} id="exampleInputName" aria-describedby="nameHelp" />
                    </div>}
                <div className="mb-3">

                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" required className="form-control" name="email" onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onBlur={handleBlur} id="exampleInputPassword1" />
                </div>
                {newUser &&
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="confirm-password" onBlur={handleBlur} id="exampleInputPassword1" />
                    </div>}
                
                <button type="submit" value={newUser ? 'sign up' : 'sign in'} className="btn btn-success" >Submit</button>
                <p >Not an user? <a onClick={() => setNewUser(!newUser)} name="newUser" className="acount"  >Create a new account</a></p>  
              

            </form>

            <div class="social-login">
                {/* < a href=" " >
                    <i class="fa fa-facebook fa-lg"></i>
                           Login in with facebook
                             </ a> */}
                <button class="social-login-btn" >   <i class="fa fa-google-plus fa-lg"></i>   log in with Facebook</button>
                <button class="social-login-btn" onClick={handleGoogleSignIn}>   <i class="fa fa-google-plus fa-lg"></i>   log in with Google </button>



            </div>

            <p style={{ color: 'red' }}>{user.error}</p>

        </div>
    );
};

export default Login;