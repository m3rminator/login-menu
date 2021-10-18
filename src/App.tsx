import { render } from '@testing-library/react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Register from './routes';
import Form from './Form';
import About from './Register'

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path='/About' component={About} />
          <Route exact path='/' component={Form} />
        </Switch>
        <Register />
      </Router>
    </div>
  );
}


export default App;
