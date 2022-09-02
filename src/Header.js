import React from 'react';

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="http://localhost:3000/" title="Home do Site">
            Home
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/Produtos" title="Produtos do Site">
            Produtos
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
