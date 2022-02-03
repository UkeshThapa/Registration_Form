import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const nav = useNavigate()
  const [user,setUser] = useState({
    email:'', password:""
  })
  
  let name,value
  const handleInputs = (e)=>{
    name = e.target.name
    value = e.target.value
    setUser({...user,[name]:value}) 
    console.log(e)
  }
   
  const loginUser = async(e) =>{
    e.preventDefault();
    const{email,password}=user;
    const res = await fetch("/signin",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });
    const data = await res.json();
    if(res.status === 400 || !data){
      alert("Invalid credential");
      console.log("Invalid credential");
    }else{
      window.alert("Login Successfull!!!!!");
      console.log("Successfull!!!!!");
      nav("/")
    }
  }
  
  return (
    <>
      <section className="login">
        <div className="max-width">
          <div className="login-content">
            <i class="fas fa-5x fa-user-circle"></i>
            <h2 className="login-title">Member Login</h2>
            <form method="POST" className="login-form" id="login-form">
              <div className="form-group">
                <label htmlFor="email">
                  <i class="fas fa-envelope"></i>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i class="fas fa-lock"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Password..."
                />

                <div className="form-group from-button">
                  <button className="login-button" onClick={loginUser}>Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
