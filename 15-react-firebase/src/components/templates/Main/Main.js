import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../sections/Header/Header";
import { getUser } from "../../../services/firebase";
import { GlobalContext } from "../../../contexts/global";

// - Dorób do komponentow Header przecisk Wyloguj. (https://firebase.google.com/docs/auth/web/password-auth)
// - Po wcisnieciu przycisku, wyloguj uzytkownika i przenies do go strony login (/)
// - Dodaj zabezpieczenie routingu, zeby wylogowany uzytkownik nie mogl wejsc na dashboard. Jesli wejdzie, przekieruj go do strony login

const Main = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  // const state = useContext(GlobalContext);
  // console.log(state.user);

  const { user } = useContext(GlobalContext);

  useEffect(() => {
    if(user) {
      if(location.pathname === '/' || location.pathname === '/register') {
        navigate('/dashboard')
      }
    } else {
      if(location.pathname === '/dashboard') {
        navigate('/')
      }
    }
  }, [user?.id])

  return (
    <div>
      <Header />
      {props.children}
      <footer>
        Hello from footer
      </footer>
    </div>
  )
}

export default Main;