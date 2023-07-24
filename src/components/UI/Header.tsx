import React, { useState } from 'react';

const Header = () => {
  const [navItems, setNavItems] = useState<string[]>([
    '서비스 소개 ',
    '대회 탐색',
    '대회 생성',
  ]);
  return (
    <header
      className="
    flex items-center
    justify-between
    px-6
    py-4
    bg-black
    text-white
    "
      text-white
    >
      <h1 className="text-2xl font-bold">TR.KR</h1>
      <ul className="flex items-center gap-4">
        {navItems.map((item) => (
          <li className="" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
