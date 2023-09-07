
import './index.css';
import LoginForm from '../componentes/loginComponents/Login.jsx';
import RegistrarForm from '../componentes/loginComponents/Registrar.jsx';
import RecuperarForm from '../componentes/loginComponents/User-recovery.jsx';
import  Home  from '../home/index.js';
import { useState } from 'react';
import Header from '../componentes/header/Header';




function Login() {

  const [user, setUser] = useState([])
  

  return (
    <div className="App">
        
        {
        !user.length > 0 ?<Header showNavbar={false}/> : <Home />
      }
      {
        !user.length > 0 ? <LoginForm setUser={setUser} /> : <Home />
      }


      <RecuperarForm />
      <RegistrarForm />
      

    </div>
  );
}

export default Login;
