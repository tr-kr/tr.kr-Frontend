import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import CompCreatePage from './pages/CompCreatePage';
import RuleBook from './components/RuleBook/RuleBook.tsx'
import ParticipatingTeam from './components/ParticipatingTeam/ParticipatingTeam.tsx'
import Result from './components/Result/Result.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'create-comps',
        element: <CompCreatePage />,
      },
      {
        path: 'rule-book', 
        element: <RuleBook />
      },
      {
        path: 'participating-team', 
        element: <ParticipatingTeam />
      },
      {
        path: 'result', 
        element: <Result />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);