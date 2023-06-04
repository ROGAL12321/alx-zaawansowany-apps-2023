import { Link } from "react-router-dom"

import styles from './Header.module.css'

// 1. Napisz page Register, ktory bedzie renderowal form z loginem i haslem. Uzytkownik powinien moc zarejestrowac swoje konto. Po poprawnej rejestracji, przekieruj na dashboard. Po nieudanej, wyswietl blad pod formularzem.
      // Link do FB: https://firebase.google.com/docs/auth/web/start
// 2. Dac walidacje na password, ze password miec minimum 6 znakow.
// 3. Dodaj nowo utworzona strone do komponentu Header


const Header = () => {
  return (
    <header className={styles.header}>
      Messages App
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header