import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  }

  const validate = () => {
    let isValid = true;

    if(!emailValue) {
      setIsEmailValid(false);
      isValid = false
    } else {
      setIsEmailValid(true);
    }

    if(passwordValue.length < 6) {
      setIsPasswordValid(false);
      isValid = false
    } else {
      setIsPasswordValid(true);
    }

    return isValid
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();

    if(!isValid) return;

    console.log(emailValue);
    console.log(passwordValue)

    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1>Login Form</h1>
      <div>
        <label>
          Email
          <input
            type="text"
            value={emailValue}
            onChange={handleEmailChange}
          />
        </label>
        {
          isEmailValid ? null : <p>Pole email nie moze byc puste</p>
        }
      </div>
      <div>
        <label>
          Hasło
          <input
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </label>
        {
          isPasswordValid ? null : <p>Pole hasło musi mieć minimum 6 znaków</p>
        }
      </div>
      <button type="submit">
        Zaloguj
      </button>
    </form>
  )
}

export default Login