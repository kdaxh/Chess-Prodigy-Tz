import React, { useState } from 'react';
import './App.css';
import Leaderboard from './Leaderboard.js';
import Matches from './Matches';
import Standings from './Standings.js';
import logo from './logo.png';

export function App() {
  const [Toggle, showMenu] = useState(false);
  return (
    <div><div id="header">
      <div class="container">
        <nav class="nav">
          <img src={logo} class="logo" />

          <div class={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul class="nav__list grid">
              <li class="nav__item">
                <a href="#header" class="nav__link">
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li class="nav__item">
                <a href="#list" class="nav__link">
                  <i class="uil uil-presentation-line nav__icon"></i>Leaderboard
                </a>
              </li>
              <li class="nav__item">
                <a href="#matches" class="nav__link">
                  <i class="uil uil-play-circle nav__icon"></i>Matches
                </a>
              </li>
              <li class="nav__item">
                <a href="#league" class="nav__link">
                  <i class="uil uil-list-ol-alt nav__icon"></i>League table
                </a>
              </li>
            </ul>

            <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
          </div>

          <div class="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
          </div>
        </nav>

        <div class="header-text">
          <p>Welcome to Chesswahili</p>
          <h1>Every single chess player is an Artist
          </h1>
        </div>
      </div>
    </div>

      <div><Leaderboard /></div>

      <div><Matches /></div>

      <div><Standings /></div>

      <div class="copyright">
        <p>Copyright © 2023, chesswahili.com</p>
      </div>

    </div>
  );
}

export default App;
