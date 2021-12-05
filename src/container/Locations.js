import React,{useEffect} from 'react'
import { Table } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Header from '../Header'
import { requestLocation } from '../thunks/listItems'

export default function Locations (){
    const location = useSelector((state)=>state.getLocation.location)
    console.log(location)
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(requestLocation())
        
    }, [])
     return(
         <>
         <Header/>
         <h1>Locations</h1>
         <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
         {location.map((item)=>
         <tr>
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td>{item.cost}</td>
        </tr>   
    
            )}
            </tbody>
          </Table>
         </>
         
         
     )
}