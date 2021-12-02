import {Button} from 'react-bootstrap'
import React from 'react'
import { Form } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { getEmailPass } from '../actions';
import { requestlogIn } from '../thunks/logIn';
import { useHistory } from 'react-router';

export default function LogIn() {
    const dispatch=useDispatch();
    const user =useSelector((state)=>state.LogIn.logIn)
    const history =useHistory();
    const handleChange=(event)=>{
        dispatch(getEmailPass({...user,[event.target.name] : event.target.value}))
      }
      const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(requestlogIn(user,history));
    }
    
    return(
        <>
        <h1>LogIn</h1>
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
          LogIN
        </Button>
      </Form>
      </>
    )
}