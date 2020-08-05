import React from 'react';
//import styles from './index.module.css';

//TO DO validation of password and username

function Register() {
    return (
        <form className="Register">
            <div className="form-control">
                <label>Username</label>
                <input type="text"/>
                </div>
            <div className="form-control">
                <label>Password</label>
                <input type="password"/>
               </div>
            <div className="form-control">
                <label>Re-Password</label>
                <input type="password"/>
            </div>
            <div className="form-control">
                <button type="button">Register</button>
            </div>
        </form>
    )
}

export default Register;