import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './components/pages/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Account from './components/pages/Account/Account';

import GlobalProvider from './contexts/global';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './styles/reset.css'
import './styles/main.css'
import Register from './components/pages/Register/Register';

// Stworz komponent Dashboard, który będzie realizował następujace załozenia:

// 1. Stworz Formularz z polami author i message
// 2. Stworz Liste, ktora będzie renderowała wiadomości dodane w formularzu
// 3. Po uzupelnieniu formularza, dodaj zawartosc wiadomosc do listy
// 4. Dodaj walidacje ze pole message musi miec minimum 4 znaki
// 5. Dane zapisuj i odczytuj z localStorage

const config = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/account',
    element: <Account />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={config} />
    </GlobalProvider>
  </React.StrictMode>
);