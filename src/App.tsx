import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header';

function App() {
  return (
    <>
      <Header />
      <div className="mt-[84px]" />
      <Outlet />
    </>
  );
}

export default App;
