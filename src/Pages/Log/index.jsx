import './style.css'
import {Link} from 'react-router-dom'
import {MapPin} from 'phosphor-react'
export default function Login() {
  
  


  return (
    <div className="login-container">
      <header className="login-header">
        <h2>Locomove</h2>
        <p>Comece Hoje um Novo Modo de Locomoção.</p>
      </header>
      <div className="login-input">
        
            <MapPin size={42} color="aliceblue"/>
            <Link to='/home'>
          <button>
              Entrar
          </button>
            </Link>

        <div className="login-social">
        </div>
      </div>
      
    </div>
  );
}

