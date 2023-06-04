import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"

import { GlobalContext } from "../../../contexts/global";

import { logout } from "../../../services/firebase";
import Button from "../../atoms/Button/Button"

import styles from './Header.module.css'

// 1. Napisz page Register, ktory bedzie renderowal form z loginem i haslem. Uzytkownik powinien moc zarejestrowac swoje konto. Po poprawnej rejestracji, przekieruj na dashboard. Po nieudanej, wyswietl blad pod formularzem.
      // Link do FB: https://firebase.google.com/docs/auth/web/start
// 2. Dac walidacje na password, ze password miec minimum 6 znakow.
// 3. Dodaj nowo utworzona strone do komponentu Header


const Header = () => {
  const navigate = useNavigate();
  const state = useContext(GlobalContext)

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate('/')
      })
  }

  return (
    <header className={styles.header}>
      Messages App
      <nav>
        <ul>
          {
            !state.user && <li>
              <Link to="/">Login</Link>
            </li>
          }
          {
            state.user && <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          }
          {
            !state.user && <li>
              <Link to="/register">Register</Link>
            </li>
          }
          {
            state.user && <li>
              <Link to="/account">My profile</Link>
            </li>
          }
          {state.user && <li>
            <Button text="Wyloguj" onClick={handleLogout}/>
          </li>}
        </ul>
      </nav>
    </header>
  )
}

export default Header