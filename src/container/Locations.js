import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
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
         <h1>location</h1>
         {location.map((item)=>
         <li>
             {item.id}:{item.name}:{item.cost}
         </li>
            )}
         </>
         
     )
}