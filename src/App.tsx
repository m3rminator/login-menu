import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register'
import Main from './pages/Main';
import styled from 'styled-components/macro';

function App() {
  return (
    <Routingdevice>
      <Router>
        <Switch>
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/' component={Main} />
        </Switch>
      </Router>
    </Routingdevice>
  );
}


export default App;


const Routingdevice = styled.div`
    
`
