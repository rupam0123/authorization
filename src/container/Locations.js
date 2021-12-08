import React,{useEffect} from 'react'
import { Table } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { setLocationLimit} from '../actions'
import Header from '../Header'
import { requestLocation } from '../thunks/listItems'

export default function Locations (){
    const {location,filter} = useSelector((state)=>state.getLocation.page)
    const dispatch=useDispatch();
    const handleChange=(event)=>{
      const { value, name } = event.target;
      dispatch(setLocationLimit({ [name]: value }));
    };

    useEffect(() => {
        dispatch(requestLocation(filter))
        
    }, [filter])
     return(
         <>
         <Header/>
         <h1>Locations</h1>
         <select name="limit" value={filter.limit} onChange={handleChange}>
             <option value={1}>1</option>
             <option value={2}>2</option>
             <option value={3}>3</option>
         </select>
         <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
         {location.map((item)=>
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