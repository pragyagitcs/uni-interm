import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Additional routes can be added here */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;