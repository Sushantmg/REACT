import React from 'react';

export const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li onClick={props.onHomeClick}>Home</li>
          <li onClick={props.onAboutClick}>About</li>
          <li onClick={props.onContactClick}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header