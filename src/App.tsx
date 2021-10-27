import { render } from '@testing-library/react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Register from './routes';
import Form from './Login';
import About from './Register'
import styled from 'styled-components';

function App() {
  return (
    <Routingdevice>
      <Router>
        <Register />
        <Switch>
          <Route exact path='/About' component={About} />
          <Route exact path='/' component={Form} />
        </Switch>
      </Router>
    </Routingdevice>
  );
}


export default App;


const Routingdevice = styled.div`
    
`
