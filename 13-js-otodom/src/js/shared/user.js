export const loginUser = (emailFromForm, passwordFromForm) => {
  return fetch('http://localhost:8000/users')
    .then(res => res.json())
    .then(users => {
      const user = users.find(user => {
        return user.email === emailFromForm
          && user.password === passwordFromForm
      })
      // uzywamy throw new Error jak chcemy zaprzestac wykonywanie Promisow
      if(!user) throw new Error("Couldn't find a user")

      localStorage.setItem('autheticatedUser', user.email)
    })
}

export const getUser = () => {
  const user = localStorage.getItem('autheticatedUser');

  if(!user) {
    window.location.href = '/login.html'
  }

  return user;
}


// Do obecnego mechizmu logowania dopisz nastepujace rzeczy

// 1. W momemcie wcisniecia przycisku zaloguj, zrob zapytanie do bazy danych i sprawdz czy istnieje taki uzytkownik o podanym emailu i hasle.

// 2. Na kazdej z podstron, dodaj przycisk logout, ktory wyloguje uzytkownika z localStorage

// 3*. Zrob formularz rejestracji, ktory doda uzytkownika a nastepnie go zaloguje