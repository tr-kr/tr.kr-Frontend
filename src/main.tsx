import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import League from './pages/League.tsx';
import MyPage from './components/MyPage/MyPage.tsx';
import CompCreatePage from './pages/CompCreatePage';
import RuleBook from './components/RuleBook/RuleBook.tsx'
import ParticipatingTeam from './components/ParticipatingTeam/ParticipatingTeam.tsx'
import CompOutline from './components/CompOutline/CompOutline.tsx'
import Result from './components/Result/Result.tsx'
import './index.css'
import BracketPage from './pages/BracketPage.tsx';
import ParticipatePage from './pages/ParticipatePage.tsx';
import Banner from './components/Banner/Banner.tsx';

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
        path: 'my-page',
        element: <MyPage />,
      },
      {
        path: 'create-comps',
        element: <CompCreatePage />,
      },

      {
        path: 'participate',
        element: <ParticipatePage />,
      },

      {
        path: 'banner',
        element: <Banner />,

        children: [
          {
            path: 'comp-outline',
            element: <CompOutline />,
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
            path: 'bracket',
            element: <BracketPage />,
          },
          {
            path: 'result',
            element: <Result />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
