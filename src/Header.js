import React from 'react';

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <button>
            <a href="http://localhost:3000/" title="Home do Site">
              Home
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="http://localhost:3000/Produtos" title="Produtos do Site">
              Produtos
            </a>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
