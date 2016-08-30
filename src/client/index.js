import React from 'react';
import {render} from 'react-dom';

import Player from './components/player'

const URL = `http://dl1.kingmovie.co/Movie/2015/Bluray/Mojave.2015.BluRay.720p.x24.KingMovie.Co.mkv`

// class App extends React.Component {
//   render () {
//     return <p>Hello React!</p>;
//   }
// }

const App = () => (
  <Player url={`${URL}`} />
)

render(<App/>, document.getElementById('app'));