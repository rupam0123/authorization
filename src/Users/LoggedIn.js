import {Button} from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Products from '../container/Products'

export default function LoggedIn(){
  const history = useHistory();

  const handleLogout=()=>{
    localStorage.removeItem("token");
    history.push('/login');

  }
    return(
      <>
      <Router>
      <Link to ='/product'>
      <Button variant="success">Product</Button>
      </Link>
      <Link to ='/locations'>
      <Button variant="success">Locations</Button>
      </Link>
      <Link to ='/families'>
      <Button variant="success">Families</Button>
      </Link>
      <Button variant="success">Transactions</Button>
      <Button variant="danger" onClick={handleLogout}>logOut</Button>
      <Route exact path='/product'component={Products}/>
      </Router>
      </>
    )
}

