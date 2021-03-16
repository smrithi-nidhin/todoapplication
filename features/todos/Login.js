import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { Redirect } from 'react-router';
import {useHistory} from 'react-router-dom';
import { login } from '../todos/todosSlice'
import "./Login.css";
const Login = () => {
    const [name, setName] =useState("");
    const dispatch = useDispatch();
const history = useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault();
       
        dispatch(login({
            name:name,
            loggedIn:true,
           
        }))
        if(login.name){
            alert(name)
            history.push('/inputadd')
        }
       
    
    }
    
    return (
        <div className="login">
            <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                <input type="name" placeholder="Enter Username" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                 />
                 <button type="submit" className="submit_btn" to="C:\todolist\src\components\TodosList.js">Submit</button>
            </form>
        </div>
    )
}

export default Login;