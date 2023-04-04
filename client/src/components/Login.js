import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
    const [ email, setEmail]=useState("");
    const [ password, setPassword]=useState("");

    const navigate = useNavigate
    async function handleSubmit(e){
        e.preventDefault()
        const submit=
        {email:email,password:password}
        let response= await fetch("/login",{
          method:"POST",
          headers:{
            "Content_Type":"application/json"
          },
          body: JSON.stringify(submit)
        })
        if(!response.okay){
            alert ("wrong password")
        }
        else{ response = await response.json()
        localStorage.setUser("user-info",
        json.stringify(response))
        navigate("transactions")
    }
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', minHeight: '100vh'}}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input value={email} onChange={(e)=>(setEmail(e.target.value))} type="email" id="email" name="email" required /><br /><br />
      
          <label htmlFor="password">Password:</label>
          <input value={password} onChange={(e)=>(setPassword(e.target.value))}type="password" id="password" name="password" required /><br /><br />
      
          <input type="submit" value="Submit" />
        </form>
      </div>
      
    );
  }
  
  export default Login;
  