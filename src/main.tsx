import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import RuleBook from './components/RuleBook/RuleBook.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error/>,
    children: [{ index: true, path: '/', element: <Home /> }, {index: true, path: 'rule-book', element: <RuleBook />}],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);