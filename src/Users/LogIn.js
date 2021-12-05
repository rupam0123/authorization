import {Button} from 'react-bootstrap'
import React,{useEffect} from 'react'
import { Form } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { getEmailPass } from '../actions';
import { requestlogIn } from '../thunks/logIn';
import { useHistory } from 'react-router';
import Header from '../Header';

export default function LogIn() {
    const dispatch=useDispatch();
    const user =useSelector((state)=>state.LogIn.logIn)
    const history =useHistory();

    useEffect(()=>{
      if(localStorage.getItem('token'))
      {
        history.push('/product')
      }

    },[])
    const handleChange=(event)=>{
        dispatch(getEmailPass({...user,[event.target.name] : event.target.value}))
      }
      const handlesubmit = (e) => {
        e.preventDefault();
        if(!user.email.trim() &&!user.password.trim()){
          return(
            alert('email or password empty')
          )
        }
        dispatch(requestlogIn(user,history));
    }
    
    return(
        <>
        <Header/>
        <h1>LogIn</h1>
        <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input className="col-sm-4 mx-3" name="email" type="email" placeholder="Enter email" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange}>
          <input className="col-sm-4 mx-3" name="password" type="password" placeholder="Password" />
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