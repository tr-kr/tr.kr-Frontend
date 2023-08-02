import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import RuleBook from './components/RuleBook/RuleBook.tsx'
import CompOutline from './components/CompOutline/CompOutline.tsx'
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
        path: 'rule-book',
        element: <RuleBook />
      },
      {
        path: 'rule-book',
        element: <RuleBook />
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