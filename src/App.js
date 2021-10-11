
import './App.css';
import NavBar from './components/Home/NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Reports from './components/Home/Reports';
import Products from './components/Products/Products';

function App() {
 
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact  component={Home}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/products' component={Products}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
