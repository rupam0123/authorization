import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { requestProducts } from '../thunks/listItems';

export default function Products (){
    const products = useSelector((state)=>state.getProduct.products)
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(requestProducts())
        
    }, [])
     return(
         <>
         <h1>Products</h1>
         <select>
             <option>page</option>
         </select>
         {products.map((item)=>
         <li>
             {item.id}:{item.name}:{item.cost}
         </li>
            )}
         </>
         
     )
}