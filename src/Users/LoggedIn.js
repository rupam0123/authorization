import {Button} from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LoggedIn(){
    return(
      <>
      <Link to ='/product'>
      <Button variant="success">Product</Button>
      </Link>
      <Link to ='/locations'>
      <Button variant="success">Locations</Button>
      </Link>
      <Button variant="success">Families</Button>
      <Button variant="success">Transactions</Button>
      </>
    )
}