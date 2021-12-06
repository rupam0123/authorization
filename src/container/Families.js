import React,{useEffect} from 'react'
import { Table } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import Header from '../Header';
import { requestFamilies } from '../thunks/listItems'


export default function Products (){
    const families = useSelector((state)=>state.getFamily.family)
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(requestFamilies())
        
    }, [])
     return(
         <>
         <Header/>
         <h1>Families</h1>
         <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
         {families.map((item)=>
         <tr>
             <td>{item.id}</td>
             <td>{item.name}</td>
        </tr>   
         )}
            </tbody>
          </Table>
         </>
         
     )
}