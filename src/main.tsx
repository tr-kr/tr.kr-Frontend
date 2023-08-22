import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import League from './pages/League.tsx';
import CompCreatePage from './pages/CompCreatePage';
import RuleBook from './components/RuleBook/RuleBook.tsx'
import ParticipatingTeam from './components/ParticipatingTeam/ParticipatingTeam.tsx'
import Result from './components/Result/Result.tsx'
import './index.css'
import BracketPage from './pages/BracketPage.tsx';
import ParticipatePage from './pages/ParticipatePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: '/league', element: <League /> },
      {
        path: 'create-comps',
        element: <CompCreatePage />,
      },
      {
        path: 'rule-book',
        element: <RuleBook />,
      },
      {
        path: 'participating-team',
        element: <ParticipatingTeam />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: 'bracket',
        element: <BracketPage />,
      },
      {
        path: 'participate',
        element: <ParticipatePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
