import React,{useEffect} from 'react'
import { Table } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Header from '../Header'
import {requestTransaction } from '../thunks/listItems'

export default function Transactions (){
    const transactions = useSelector((state)=>state.getTranstaction.trans)
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(requestTransaction())
        
    }, [])
     return(
         <>
         <Header/>
         <h1>Transaction</h1>
         <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ProductId</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
         {transactions.map((item)=>
         <tr>
             <td>{item.id}</td>
             <td>{item.productId}</td>
             <td>{item.quantity}</td>
             <td>{item.cost}</td>
        </tr>   
    
            )}
            </tbody>
          </Table>
         </>
         
         
     )
}