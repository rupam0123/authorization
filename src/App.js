import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './Users/Registration';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import LogIn from './Users/LogIn';
import Products from './container/Products';
import Locations from './container/Locations';
import Families from './container/Families';
import Logout from './Users/Logout';
import Protected from './Protected';
import Transactions from './container/Transactions';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Route exact path='/registration'component={Registration}/>
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
        <Route path='/transactions'>
          <Protected Cmp={Transactions}/>    
        </Route>
      </Router>
    </div>
    </>
  );
}

export default App;
