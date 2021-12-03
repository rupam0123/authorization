import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { requestFamilies } from '../thunks/families';


export default function Products (){
    const families = useSelector((state)=>state.getFamily.family)
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(requestFamilies())
        
    }, [])
     return(
         <>
         <h1>Families</h1>
         {families.map((item)=>
         <li>
             {item.id}:{item.name}:{item.cost}
         </li>
            )}
         </>
         
     )
}