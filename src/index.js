import React from 'react';
import ReactDOM from 'react-dom';
import blueprint from 'blueprintjs';

import App from './app.js';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
