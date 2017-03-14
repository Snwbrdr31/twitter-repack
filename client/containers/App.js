import React from 'react';
import Nav from '../components/Nav';

const App = ({ children }) => (
  <div>
    <Nav />
    { children }
  </div>
)

export default App;

