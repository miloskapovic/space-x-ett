import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';

import Home from './containers/Home';
import LaunchPads from './containers/LaunchPads';
import Ships from './containers/Ships';
import Header from './components/Header';

const App: React.FC = () => {
  const [sort, setSort] = useState<string>('DESC');
  return (
    <BrowserRouter>
      <Header handleSort={setSort} sort={sort} />
      <Box p={20}>
        <Switch>
          <Route path='/' exact render={(props) => <Home sort={sort} {...props} />} />
          <Route path='/ships' exact render={(props) => <Ships sort={sort} {...props} />} />
          <Route path='/launchpads' exact component={LaunchPads} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
