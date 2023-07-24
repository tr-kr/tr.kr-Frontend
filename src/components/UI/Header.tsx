import React, { useState } from 'react';

const Header = () => {
  const navItems: string[] = ['서비스 소개', '대회 탐색', '대회 생성'];
  const [active, setActive] = useState(navItems[0]); // Set the first item as the default active item

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white">
      <h1 className="text-3xl font-EB">TR.KR</h1>
      <ul className="flex items-center justify-between text-xl gap-16">
        {navItems.map((item) => (
          <li
            className={`
            ${item === active && 'border-b border-primary'}
              `}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="px-4 py-2 text-sm font-bold text-white bg-transparent border-2 border-primary rounded-md">
        로그인
      </button>
    </header>
  );
};

export default Header;
