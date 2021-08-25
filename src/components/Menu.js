import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../routes/Routes';

const Menu = () => {
  
    return (
      <BrowserRouter>
       <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact Us</a>
        </li>
      </ul>
    <Routes />
    </BrowserRouter>

    );




}

export default Menu;