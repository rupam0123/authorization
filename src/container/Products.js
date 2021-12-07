import React,{useEffect} from 'react'
import { Table } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import { setProductPage } from '../actions';
import { requestProducts } from '../thunks/listItems';
import Header from '../Header';

export default function Products (){
    const {products,filter} = useSelector((state)=>state.getProduct.page)
    const dispatch=useDispatch();

    const handleChange=(event)=>{
        const { value, name } = event.target;
        dispatch(setProductPage({ [name]: value }));
      };
    

    useEffect(() => {
        dispatch(requestProducts(filter))
        
    }, [filter])
     return(
         <>
         <Header/>
         <h1>Products</h1>
         <select name="limit" value={filter.limit} onChange={handleChange}>
             <option value={1}>1</option>
             <option value={2}>2</option>
             <option value={3}>3</option>
             <option value={5}>5</option>
             <option value={10}>10</option>
             <option value={10}>20</option>
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