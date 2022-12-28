import './App.css';
import logo from './logo.png';
import user from './user.png';
import thumbnail from './thumbnail.png';

function App() {
  return (
    <div>
      <div id="header">
        <div class="container">
          <nav>
            <img src={logo} />
            <ul id="sidemenu">
              <li><a href="#header">Home</a></li>
              <li><a href="#lichess">Rapid</a></li>
              <li><a href="#chess">Blitz</a></li>
              <li><a href="#signin">Sign in</a></li>
            </ul>
          </nav>
          <div class="header-text">
            <p>Welcome to Chess Prodigy Tz</p>
            <h1>View <x>top players</x> ratings</h1>
          </div>
        </div>
      </div>

      <div id="lichess">
        <div class="container">
          <h1 class="sub-title">Rapid</h1>
          <div class="lichess-list">
            <div>
              <img src={user} />
              <h2>2. Player#2</h2>
              <p>RATING</p>
            </div>
            <div>
              <img src={user} />
              <h2>1. Player#1</h2>
              <p>RATING</p>
            </div>
            <div>
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
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#4</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">5.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#5</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">6.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#6</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">7.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#7</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">8.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#8</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">9.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#9</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">10.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#10</div>
                  <div class="col col-4">RATING</div>
                </li>
              </ul></h3>
          </div>
        </div>
      </div>

      <div id="chess">
        <div class="container">
          <h1 class="sub-title">Blitz</h1>
          <div class="chess-list">
            <div>
              <img src={user} />
              <h2>2. Player#2</h2>
              <p>RATING</p>
            </div>
            <div>
              <img src={user} />
              <h2>1. Player#1</h2>
              <p>RATING</p>
            </div>
            <div>
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
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#4</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">5.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#5</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">6.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#6</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">7.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#7</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">8.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#8</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">9.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#9</div>
                  <div class="col col-4">RATING</div>
                </li>

                <li class="table-row">
                  <div class="col col-1">10.</div>
                  <div class="col col-2"><img src={thumbnail} /></div>
                  <div class="col col-3">Player#10</div>
                  <div class="col col-4">RATING</div>
                </li>
              </ul></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
