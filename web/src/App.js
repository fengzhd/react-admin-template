import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from 'pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Index}></Route>
    </BrowserRouter>
  );
}

export default App;
