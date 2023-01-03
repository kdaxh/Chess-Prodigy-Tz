import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div>
      <div id="header">
        <div class="container">
          <nav>
            <img src={logo} class="logo" />
            <ul id="sidemenu">
              <li><a href="#header">Home</a></li>
              <li><a href="#list">Leaderboard</a></li>
            </ul>
          </nav>
          <div class="header-text">
            <p>Welcome to Chess Prodigy Tz</p>
            <h1>Every single <x>chess player</x> is an <x>Artist</x>
            </h1>
          </div>
        </div>
      </div>

      <div id="list">
        <div class="container">
          <div class="row">
            <div class="list-col-1">
              <h2>Rapid</h2>
              <div class="players">
                <div class="table-container">
                  <h3>
                    <ul class="table">
                      <li class="table-row1">
                        <div class="col col-1">1.</div>
                        <div class="col col-2">Player#1</div>
                        <div class="col col-3">RATING</div>
                      </li>

                      <li class="table-row2">
                        <div class="col col-1">2.</div>
                        <div class="col col-2">Player#2</div>
                        <div class="col col-3">RATING</div>
                      </li>

                      <li class="table-row3">
                        <div class="col col-1">3.</div>
                        <div class="col col-2">Player#3</div>
                        <div class="col col-3">RATING</div>
                      </li>

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
                        <div class="col col-2">Player#4</div>
                        <div class="col col-3">RATING</div>
                      </li>

                      <li class="table-row">
                        <div class="col col-1">9.</div>
                        <div class="col col-2">Player#4</div>
                        <div class="col col-3">RATING</div>
                      </li>

                      <li class="table-row">
                        <div class="col col-1">10.</div>
                        <div class="col col-2">Player#10</div>
                        <div class="col col-3">RATING</div>
                      </li>
                    </ul>
                  </h3>
                </div>
              </div>
            </div>

            <div class="list-col-2">
              <h2>Blitz</h2>
              <div class="players">
                <div class="table-container">
                  <h3>
                    <ul class="table">
                      <li class="table-row1">
                        <div class="col col-1">1.</div>
                        <div class="col col-2">Player#1</div>
                        <div class="col col-3">RATING</div>
                      </li>

                      <li class="table-row2">
                        <div class="col col-1">2.</div>
                        <div class="col col-2">Player#2</div>
                        <div class="col col-3">RATING</div>
                      </li>

                      <li class="table-row3">
                        <div class="col col-1">3.</div>
                        <div class="col col-2">Player#3</div>
                        <div class="col col-3">RATING</div>
                      </li>

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
                        <div class="col col-2">Player#4</div>
                        <div class="col col-3">RATING</div>
                      </li>

                      <li class="table-row">
                        <div class="col col-1">9.</div>
                        <div class="col col-2">Player#4</div>
                        <div class="col col-3">RATING</div>
                      </li>

                      <li class="table-row">
                        <div class="col col-1">10.</div>
                        <div class="col col-2">Player#10</div>
                        <div class="col col-3">RATING</div>
                      </li>
                    </ul>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright © 2023, Chess Prodigy Tz.</p>
      </div>
    </div>
  );
}

export default App;
