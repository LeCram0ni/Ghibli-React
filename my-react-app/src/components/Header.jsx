import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

  return (
    <header>
      <Link to="/"> <img src="\src\media\ghibli-logo.png" /></Link>
      <ul>
        <li><Link to="/">Overview</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/links">Links</Link></li>
      </ul>
    </header>
  );
}
