import { Button } from 'react-bootstrap'
import React,{useEffect} from 'react'
import { Form } from 'react-bootstrap'
import { setEmailPass } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { requestNewUsers } from '../thunks/registration'
import { useHistory } from 'react-router'
import Header from '../Header'

export default function Registration() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.registration.data)
  const history =useHistory();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      history.push('/login')
    }
  },[])

  const handleChange=(event)=>{
    dispatch(setEmailPass({...user,[event.target.name] : event.target.value}))
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!user.email.trim() && !user.password.trim()){
      return(
        alert('email or password empty')
      )
    };
    dispatch(requestNewUsers(user));
    history.push('/login')
  }
  const handleLogin =() =>{
    history.push('/login')
  }


  return (
    <>
    <Header/>
      <h1>Registration Form</h1>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input className="col-sm-4" name="email" type="email" placeholder="Enter email" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange}>
          <input className="col-sm-4" name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>{' '}
        <Button variant="secondary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </>
  )
}