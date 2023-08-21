import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navItems: string[] = ['서비스 소개', '대회 탐색', '대회 생성'];
  const [routing, setRouting] = useState({
    '서비스 소개': '/',
    '대회 탐색': '/league',
    '대회 생성': '/create',
  });
  const [active, setActive] = useState(navItems[4]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    for (const item in routing) {
      if (routing[item] === location.pathname) {
        setActive(item);
        break;
      }
    }
  }, [location.pathname, routing]);
  const handleNavigation = (item: string) => {
    setActive(item);
    console.log(location);
    navigate(`${routing[item]}`);
  };
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white">
      <h1
        className="text-3xl font-EB cursor-pointer"
        onClick={() => navigate('/')}
      >
        TR.KR
      </h1>
      <ul className="flex items-center justify-between text-xl gap-16">
        {navItems.map((item, index) => (
          <li
            key={item}
            className={`
             cursor-pointer
            ${item === active && 'border-b-4 border-primary'}
              py-4`}
            onClick={() => handleNavigation(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="px-4 py-2 text-lg font-bold text-white bg-transparent border-2 border-primary rounded-md">
        로그인
      </button>
    </header>
  );
};

export default Header;
