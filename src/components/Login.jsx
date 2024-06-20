import React,{useState, useEffect} from 'react';

const Login=()=>{
    const [modal , useModal]= useState(false)


const ToogleModal=()=>{
    useModal(!modal)
}
    return(
        <button onClick={ToogleModal}>Login</button>
    )

}
export default Login 
