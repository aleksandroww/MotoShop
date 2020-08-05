import React from 'react';
//import styles from './index.module.css';

//TO DO validation on username and pass to firebase
function Login() {
    return (
    <form className="Login">
    <div className="form-control">
      <label>Username</label>
      <input type="text"/>
    </div>
    <div className="form-control">
      <label>Password</label>
      <input type="password"/>
    </div>
    <div className="form-control">
      <button type="button">Login</button>
    </div>
  </form>
    )
}

export default Login;