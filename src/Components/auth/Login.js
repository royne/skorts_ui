import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [statusLogin, setStatusLogin] = useState(false)


  const getCredentials = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const requestLogin = e => {
    e.preventDefault();
    const url = 'http://localhost:4000/api/v1/user_token';
    const data = { email: credentials.email, password: credentials.password }
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ auth: data })
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.jwt)
        setStatusLogin(!statusLogin)
      }) 
      .catch(e => console.log(e))
  }

  return ( 
    <div className="container mt-3">
      <form onSubmit={requestLogin}>
        <h1>Login</h1>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={getCredentials} />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={getCredentials} />
        </div>
        <div className="form-group">
          <button className="btn btn-block btn-dark">LOGIN</button>
        </div>
      </form>
      { statusLogin && <Redirect to="/perfil" />}
    </div>
   );
}
 
export default Login;