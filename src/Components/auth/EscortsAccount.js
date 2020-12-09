import React, {useState} from 'react';
import Form from './Form';
import { setToken } from '../../services/authService'
import '../../styles/escorts_account.css';
import { Redirect } from 'react-router-dom';

const EscortsAccount = () => {
  const [user, setUser] = useState(null)
  const [statusLogin, setStatusLogin] = useState(false)

  const setData = (data, credential) => {
    setUser(data)

    const url = 'http://localhost:4000/api/v1/user_token';
    const credentials = {email: data.email, password: credential}
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ auth: credentials })
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.jwt)
        setStatusLogin(!statusLogin)
      }) 
  }

  return ( 
    <main className="signup_escort ">
      <section className="signup_escort_section container ">
        <div className="signup_escort_box col-md-6">
          <h1>Registrarte Es Muy Facil</h1>
          <h4>Crea tu propio perfil y comienza a recibir llamadas</h4>
        </div>
        <div className="signup_escort_box_rigth col-md-6">
          <div className="box_form_signup">
            <Form 
              setData={setData} />
          </div>
        </div>
      </section>

      <section className="signup_escort_section">
        <h1 className="text-center">¡No esperes mas Registrate ya!</h1>
      </section>
      { statusLogin && <Redirect to="/perfil" />}
    </main>
   );
}
 
export default EscortsAccount;