import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './containers/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/search' exact component={SearchAndSort} />
        <Route path='/news/:newsId' exact component={Article} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
