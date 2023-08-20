import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import RuleBook from './components/RuleBook/RuleBook.tsx'
import ParticipatingTeam from './components/ParticipatingTeam/ParticipatingTeam.tsx'
import Result from './components/Result/Result.tsx'
import Banner from './components/Banner/Banner.tsx'
import './index.css'
import CompOutline from './components/CompOutline/CompOutline.tsx';

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
        path: 'banner', 
        element: <Banner />
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
      },
      {
        path: 'comp-outline', 
        element: <CompOutline />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);