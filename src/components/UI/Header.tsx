import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
type RoutingType = {
  '서비스 소개': string;
  '대회 탐색': string;
  '대회 생성': string;
};

const Header = () => {
  const [navItems, setNavItems] = useState<string[]>([
    '서비스 소개',
    '대회 탐색',
    '대회 생성',
  ]);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    setIsLogin(localStorage.getItem('token') ? true : false);
  }, []);
  useEffect(() => {
    if (isLogin) {
      setNavItems((prevItems) => [...prevItems, '마이페이지', '참여한 대회']);
      setRouting((prevRouting) => ({
        ...prevRouting,
        마이페이지: '/my-page',
        '참여한 대회': `/mypage/league`,
      }));
    }
  }, [isLogin]);

  const [routing, setRouting] = useState<RoutingType>({
    '서비스 소개': '/',
    '대회 탐색': '/league',
    '대회 생성': '/create-comps',
  });
  const [active, setActive] = useState(navItems[4]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    for (const item in routing) {
      if (routing[item as keyof RoutingType] === location.pathname) {
        setActive(item);
        break;
      }
    }
  }, [location.pathname, routing]);
  const handleNavigation = (item: keyof RoutingType) => {
    setActive(item);
    console.log(location);
    navigate(`${routing[item]}`);
  };
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white fixed top-0 right-0 z-50 w-full ">
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
                cursor-pointer relative 
                transform hover:scale-105 hover:text-primary 
                py-4
            `}
            onClick={() => handleNavigation(item as keyof RoutingType)}
          >
            <span>{item}</span>
            <span
              className={`
                    absolute bottom-0 left-0 empty-content block 
                    ${item === active ? 'w-full' : 'w-0'} 
                    h-1 bg-primary transition-width duration-300 ease-in-out
                `}
            ></span>
          </li>
        ))}
      </ul>
      <button
        className="px-4 py-2 text-lg font-bold text-white bg-transparent border-2 border-primary rounded-md"
        onClick={() => {
          navigate('/login');
        }}
      >
        {isLogin ? '로그인' : '로그아웃'}
      </button>
    </header>
  );
};

export default Header;
