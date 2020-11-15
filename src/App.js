
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Navb';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Project from './Project';
import Services from './Services';
import Home from './Home';

function App() {
 
  return (
    <Router>
    <div className="App">
        <Navb />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/project" component={Project}/>
        <Route exact path="/services" component={Services}/>
        </Switch>
      
  </div>
  </Router>
  );
}




export default App;
