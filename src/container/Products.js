import React,{useEffect} from 'react'
import { Table } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import { setProductPage } from '../actions';
import { requestProducts } from '../thunks/listItems';

export default function Products (){
    const {products,filter} = useSelector((state)=>state.getProduct.page)
    const dispatch=useDispatch();

    const handleChange=(event)=>{
        const { value, name } = event.target;
        dispatch(setProductPage({ [name]: value }));
      };
    

    useEffect(() => {
        dispatch(requestProducts(filter))
        
    }, [])
     return(
         <>
         <h1>Products</h1>
         <select name="limit" value={filter.limit} onChange={handleChange}>
             <option value={7}>7</option>
             <option value={8}>8</option>
             <option value={9}>9</option>
             <option value={10}>10</option>
         </select>
         <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
         {products.map((item)=>
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