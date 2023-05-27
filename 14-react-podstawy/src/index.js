import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Chat from './Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));

// JSX - polaczenie JS i HTML

const name = 'Damian';

// w JSX moge zdefiniowac zmienna jako lancuch JSX i go pozniej zaladowac
const Greetings = <div>
  <h1>Hello from greetings</h1>
</div>

// Tu jest zwykly JS

const tasks = [
  {
    id: 1,
    name: "Jest fajnie"
  },
  {
    id: 2,
    name: "Ale fajny dzien w ALX"
  }
]


const handleClick = () => {
  console.log('hej!');
}


// Stworz komponent Chat w pliku src/Chat.js i zaimportuj go do index.js.

// Komponent Chat powinien zawierac formularz, skladacy sie z 2 pol (author i message).
// Stworz interaktywny formularz i liste, gdzie uzytkownik bedzie mogl dodawac wiadomosci do chatu (i oczywiscie je czytac)

// do 13:15 zadanie a pozniej przerwa do 14:15

root.render(
  <React.StrictMode>
    <App />
    {/* <Chat /> */}
  </React.StrictMode>
)

// root.render(
//   <React.StrictMode>
//     {/* a tu jest JSX */}
//     <div>
//       {/* Wstrzykiwanie zmiennych */}
//       <h1>Hello {name}</h1>

//       {/* eventy - onClick, onSubmit, onChange (przy inputach) */}

//       <p onClick={handleClick}>text</p>

//       {Greetings}

//     {/* Operator trojarguemntowy (sposob na posiadanie if/else wewnatrz JSX) */}
//     <h2>Ilosc sekund to {true ? 60 : 90}</h2>

//     {/* Jesli chcemy nic nie wyswietlac, to musimy zwrocic null */}

//     <h3>Ilosc sekund to {true ? null : 30}</h3>

//     {/* Zeby zaladowac dane z JS do JSX, musimy uzyc funkcji map */}

//     {/* atrybut key musi byc uzywany w pierwszym tagu JSX zwracanym w funkcji map i sluzy do identyfikacji elementow zeby np. przy usuwaniu wiedzial, ktory element ma usunac */}
//     {tasks.map(task =>
//       <div key={task.id}>
//         {task.name}
//       </div>
//     )}

//       {/* Te znaczniki wywoluja error, poniewaz sa niezamkniete */}

//       {/* <input type="text">
//       <img src="http://placehold.it/400x400"> */}

//       {/* W JSX wszystkie tagi HTML musza byc zamkniete */}
//       <input type="text"/>
//       <img src="http://placehold.it/400x400"/>


//       {/* w JSX niektore atrybuty zapisujemy inaczej */}

//       {/* HTML */}
//         {/* <div class="container"></div> */}
//       {/* JSX */}
//         {/* <div className="container"></div> */}

//       {/* Stylowanie w HTML */}

//         {/* <div style="margin:20px; border: 1px solid black;"></div> */}

//       {/* Stylowanie w JSX */}

//         {/* <div style={{
//           margin: "20px",
//           border: "1px solid black"
//         }}>
//           tekst
//         </div> */}

//     </div>

//   </React.StrictMode>
// );

