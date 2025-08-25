import './App.css'; 
import { useState } from "react"; 
import { validateEmail } from "./utils"; 

// Componente para mostrar un mensaje de error si la contraseña no cumple con los requisitos
const PasswordErrorMessage = () => { 
  return ( 
    <p className="FieldError">Password should have at least 8 characters</p> 
  ); 
}; 

function App() { 
  // Estados para manejar los valores de los campos del formulario
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState({ 
    value: "", 
    isTouched: false, 
  }); 
  const [role, setRole] = useState("role"); 

  // Función para verificar si el formulario es válido
  const getIsFormValid = () => { 
    return ( 
      firstName && 
      validateEmail(email) && 
      password.value.length >= 8 && 
      role !== "role" 
    ); 
  }; 

  // Función para limpiar los campos del formulario
  const clearForm = () => { 
    setFirstName(""); 
    setLastName(""); 
    setEmail(""); 
    setPassword({ 
      value: "", 
      isTouched: false, 
    }); 
    setRole("role"); 
  }; 

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Account created!"); 
    clearForm(); 
  }; 

  return ( 
    <div className="App"> 
      <form onSubmit={handleSubmit}> 
        <fieldset> 
          <h2>Sign Up</h2> 
          {/* Campo para el nombre */}
          <div className="Field"> 
            <label> 
              First name <sup>*</sup> 
            </label> 
            <input 
              value={firstName} 
              onChange={(e) => { 
                setFirstName(e.target.value); 
              }} 
              placeholder="First name" 
            /> 
          </div> 
          {/* Campo para el apellido */}
          <div className="Field"> 
            <label>Last name</label> 
            <input 
              value={lastName} 
              onChange={(e) => { 
                setLastName(e.target.value); 
              }} 
              placeholder="Last name" 
            /> 
          </div> 
          {/* Campo para el correo electrónico */}
          <div className="Field"> 
            <label> 
              Email address <sup>*</sup> 
            </label> 
            <input 
              value={email} 
              onChange={(e) => { 
                setEmail(e.target.value); 
              }} 
              placeholder="Email address" 
            /> 
          </div> 
          {/* Campo para la contraseña */}
          <div className="Field"> 
            <label> 
              Password <sup>*</sup> 
            </label> 
            <input 
              value={password.value} 
              type="password" 
              onChange={(e) => { 
                setPassword({ ...password, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setPassword({ ...password, isTouched: true }); 
              }} 
              placeholder="Password" 
            /> 
            {password.isTouched && password.value.length < 8 ? ( 
              <PasswordErrorMessage /> 
            ) : null} 
          </div> 
          {/* Campo para seleccionar el rol */}
          <div className="Field"> 
            <label> 
              Role <sup>*</sup> 
            </label> 
            <select value={role} onChange={(e) => setRole(e.target.value)}> 
              <option value="role">Role</option> 
              <option value="individual">Individual</option> 
              <option value="business">Business</option> 
            </select> 
          </div> 
          {/* Botón para enviar el formulario */}
          <button type="submit" disabled={!getIsFormValid()}> 
            Create account 
          </button> 
        </fieldset> 
      </form> 
    </div> 
  ); 
} 

export default App;