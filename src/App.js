import './App.css';
import Api from './Api.js';
import logo from './logo.png';

export function App() {

  return (
    <div><div id="header">
      <div class="container">
        <nav>
          <img src={logo} class="logo" />
          <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#list">Leaderboard</a></li>
            <li><a href="#matches">Matches</a></li>
            <li><a href="#legue">League table</a></li>
          </ul>
        </nav>
        <div class="header-text">
          <api />
          <p>Welcome to Chess Prodigy Tz</p>
          <h1>Every single <x>chess player</x> is an <x>Artist</x>
          </h1>
        </div>
      </div>
    </div>

      <div><Api /></div>

      <div class="copyright">
        <p>Copyright © 2023, Chesswahili.</p>
      </div>

    </div>);
}

export default App;
