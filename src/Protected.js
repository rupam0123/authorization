import React,{useEffect} from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

function Protected (props) {
    const token = useSelector((state)=>state.accessToken.token)
    let Cmp = props.Cmp
    const history =useHistory();
    useEffect (()=>{
        if(!token){
            history.push('/registration')
        }
    },[]) 
    return(
        <div>
            <Cmp/>
        </div>
    )
}
export default Protected