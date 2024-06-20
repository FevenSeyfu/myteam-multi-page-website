import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
        <div>
          <li>
            <a href="/home">home</a>
          </li>
          <li>
            <a href="/contact">about</a>
          </li>
        </div>
        <li>
          <button type="button">contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
