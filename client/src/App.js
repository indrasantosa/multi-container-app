import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Link to={'/'}>Home</Link>
        <Link to={'/otherpage'}>Other Pagests</Link>
        <Route exact path={'/'} component={Fib} />
        <Route path={'/otherpage'} component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
