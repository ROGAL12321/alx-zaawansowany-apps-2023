export const loginUser = (email, password) => {
  let valid = false;

  if(email === 'abc@wp.pl' && password === '1234') {
    valid = true;
  }

  if(valid) {
    localStorage.setItem('autheticatedUser', email)
  }

  return valid;
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