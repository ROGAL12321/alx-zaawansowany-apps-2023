import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import InputField from '../../sections/InputField/InputField';
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
      <Title text="Login"/>
      <InputField
        type="text"
        label="Email"
        value={emailValue}
        handleChange={handleEmailChange}
        isError={!isEmailValid}
        errorMessage="Pole email nie moze byc puste"
      />
      <InputField
        label="Hasło"
        type="password"
        value={passwordValue}
        handleChange={handlePasswordChange}
        isError={!isPasswordValid}
        errorMessage="Pole hasło musi mieć minimum 6 znaków"
      />
      <Button type="submit" text="Zaloguj"/>
    </form>
  )
}

export default Login