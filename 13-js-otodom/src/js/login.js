import { loginUser } from "./shared/user";

const loginForm = document.querySelector('#loginForm');

const handleSubmit = (event) => {
  event.preventDefault();

  const user = {
    email: loginForm.elements.email.value,
    password: loginForm.elements.password.value
  }

  const isValid = loginUser(user.email, user.password)

  if(isValid) {
    window.location.href = '/index.html'
  }
}


loginForm.addEventListener('submit', handleSubmit)