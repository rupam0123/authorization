import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './Users/Registration';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import LogIn from './Users/LogIn';
import Products from './container/Products';
import Locations from './container/Locations';
import Families from './container/Families'
import Logout from './Users/LoggedIn';
import Protected from './Protected';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Route path='/registration'component={Registration}/>
        <Route path='/login'component={LogIn}/>
        <Route path='/logout'component={Logout}/>
        <Route path='/product'>
          <Protected Cmp={Products}/>
        </Route>
        <Route path='/locations'>
          <Protected Cmp={Locations}/>
        </Route>
        <Route path='/families'>
          <Protected Cmp={Families}/>    
        </Route>
      </Router>
    </div>
    </>
  );
}

export default App;
