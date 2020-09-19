import React, {useState} from 'react';

const  Form = ({setData}) => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  })

  const getCredentials = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const requestSignup = e => {
    e.preventDefault();
    const url = 'http://localhost:4000/api/v1/create_escort';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({user: credentials})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData(data)
      setCredentials({
        username: '',
        email: '',
        phone: '',
        password: ''
      })
    })
    .catch(e => console.log(e))
  }

  return ( 
    <form onSubmit={requestSignup}>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Username"
          className="form-control"
          name="username"
          value={credentials.username}
          onChange={getCredentials} />
      </div>
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
          type="number" 
          placeholder="Celular"
          className="form-control"
          name="phone"
          value={credentials.phone}
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
        <button className="btn btn-block btn-dark">Registrate</button>
      </div>
    </form>
   );
}
 
export default Form;