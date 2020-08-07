import React from 'react';
//import styles from './index.module.css';

//TO DO validation on username and pass to firebase
function Login() {
  return (
    <form>
      <section>
        <label htmlFor="username">Username</label>
        <div>
          <input name="username" type="text" />
        </div>
      </section>

      <section>
        <label htmlFor="password">Password</label>
        <div>
          <input name="password" type="text" />
        </div>
      </section>

      <button>Login</button>
    </form>
  );
}

export default Login;
