import './App.css';
import * as ReactDOM from 'react-dom';
import logo from './logo.png';
import user from './user.png';
import thumbnail from './thumbnail.png';
import rapid_icon from './rapid.svg';
import blitz_icon from './blitz.svg';

function App() {
  return (
    <div>
      <div id="header">
        <div class="container">
          <nav>
            <img src={logo} />
            <ul id="sidemenu">
              <li><a href="#header" onclick="closemenu()">Home</a></li>
              <li><a href="#lichess" onclick="closemenu()">Rapid</a></li>
              <li><a href="#chess" onclick="closemenu()">Blitz</a></li>
              <li><a href="#signin" onclick="closemenu()">Sign in</a></li>
              <i class="menu" onclick="closemenu()">M</i>
            </ul>
            <i class="close" onclick="openmenu()">X</i>
          </nav>
          <div class="header-text">
            <p>Welcome to Chess Prodigy Tz</p>
            <h1>View <x>top players</x> ratings</h1>
          </div>
        </div>
        
      </div>

      <div id="lichess">
        <div class="container">
          <h1 class="sub-title">Rapid<img src={rapid_icon} class="icon" /></h1>
          <div class="lichess-list">
            <div class="player1">
              <img src={user} />
              <h2>1. Player#1</h2>
              <p>RATING</p>
            </div>

            <div class="player2">
              <img src={user} />
              <h2>2. Player#2</h2>
              <p>RATING</p>
            </div>

            <div class="player3">
              <img src={user} />
              <h2>3. Player#3</h2>
              <p>RATING</p>
            </div>
          </div>
        </div>
        <div class="players">
          <div class="table-container">
            <h3>
              <ul class="table">
                <li class="table-row">
                  <div class="col col-1">4.</div>
                  <div class="col col-2">Player#4</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">5.</div>
                  <div class="col col-2">Player#5</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">6.</div>
                  <div class="col col-2">Player#6</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">7.</div>
                  <div class="col col-2">Player#7</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">8.</div>
                  <div class="col col-2">Player#8</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">9.</div>
                  <div class="col col-2">Player#9</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">10.</div>
                  <div class="col col-2">Player#10</div>
                  <div class="col col-3">RATING</div>
                </li>
              </ul></h3>
          </div>
        </div>
      </div>

      <div id="chess">
        <div class="container">
          <h1 class="sub-title">Blitz<img src={blitz_icon} class="icon" /></h1>
          <div class="chess-list">
            <div class="player1">
              <img src={user} />
              <h2>1. Player#1</h2>
              <p>RATING</p>
            </div>

            <div class="player2">
              <img src={user} />
              <h2>2. Player#2</h2>
              <p>RATING</p>
            </div>

            <div class="player3">
              <img src={user} />
              <h2>3. Player#3</h2>
              <p>RATING</p>
            </div>
          </div>
        </div>
        <div class="players">
          <div class="table-container">
            <h3>
              <ul class="table">
                <li class="table-row">
                  <div class="col col-1">4.</div>
                  <div class="col col-2">Player#4</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">5.</div>
                  <div class="col col-2">Player#5</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">6.</div>
                  <div class="col col-2">Player#6</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">7.</div>
                  <div class="col col-2">Player#7</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">8.</div>
                  <div class="col col-2">Player#8</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">9.</div>
                  <div class="col col-2">Player#9</div>
                  <div class="col col-3">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">10.</div>
                  <div class="col col-2">Player#10</div>
                  <div class="col col-3">RATING</div>
                </li>
              </ul></h3>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright © 2022, Chess Prodigy Tz.</p>
      </div>

    </div>
  );
}

export default App;
