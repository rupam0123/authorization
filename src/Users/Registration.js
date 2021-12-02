import { Button } from 'react-bootstrap'
import React from 'react'
import { Form } from 'react-bootstrap'
import { setEmailPass } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { requestNewUsers } from '../thunks/registration'
import { useHistory } from 'react-router'

export default function Registration() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.registration.data)
  const history =useHistory();
  console.log('i am user', user)

  const handleChange=(event)=>{
    dispatch(setEmailPass({...user,[event.target.name] : event.target.value}))
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(requestNewUsers(user));
    history.push('/login')

  }


  return (
    <>
      <h1>Registration Form</h1>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange}>
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}