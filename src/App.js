import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './Users/Registration';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import LogIn from './Users/LogIn';
import LoggedIn from './Users/LoggedIn';
import Products from './container/Products';
import Locations from './container/Locations';
import Families from './container/Families'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/registration">Registration</Link>
        <Route path='/registration'component={Registration}/>
        <Route path='/login'component={LogIn}/>
        <Route path='/loggedin'component={LoggedIn}/>
        <Route path='/product'component={Products}/>
        <Route path='/locations'component={Locations}/>
        <Route path='/families'component={Families}/>
      </Router>
    </div>
  );
}

export default App;
