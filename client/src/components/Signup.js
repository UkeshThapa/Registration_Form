import React,{useState} from 'react';
import '../App.css';
import cover from '../assets/images/cover.jpg';
import {Link,useNavigate} from 'react-router-dom';

function SIgnup() {
  const nav = useNavigate();
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });

  let name , value;

  const handleInput = (e) =>{

    name = e.target.name
    value = e.target.value
    
    setUser({...user,[name]:value})
  };
  
  const postData = async (e)=>{
    e.preventDefault()
    console.log(user)
    const {name,email,phone,work,password,cpassword} = user;
    const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });
    const data = await res.json();
    if(res.status === 422 || !data){
      alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successfull!!!!!");
      console.log("Registration Successfull!!!!!");
      nav("/login")
    }

  };


  return <>
    <section className="signup" >
        <div className="max-width">
            <div className="signup-content">
                <div className="column left">
                    <img src={cover} alt='imag'/>
                </div>

                <div className="column right">
                    <h2 className="title">SignUp</h2>
                    <form method='POST' className='register-form' id="register-form">

                      <div className='form-group'>
                        <label htmlFor='name'>
                        <i class="fas fa-user"></i>
                        </label>
                        <input type="text" name="name" id="name" autoComplete='off'
                        value={user.name} 
                        onChange={handleInput}
                        placeholder='Username'/>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='email'>
                        <i class="fas fa-envelope"></i>
                        </label>
                        <input type="text" name="email" id="email" autoComplete='off'
                        value={user.email}
                        onChange={handleInput}
                        placeholder='Email'/>
                      </div>


                      <div className='form-group'>
                        <label htmlFor='phone'>
                        <i class="fas fa-phone"></i>
                        </label>
                        <input type="text" name="phone" id="phone" autoComplete='off'
                        value={user.phone}
                        onChange={handleInput}
                        placeholder='Phone Number'/>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='work'>
                        <i class="fas fa-briefcase"></i>
                        </label>
                        <input type="text" name="work" id="work" autoComplete='off'
                        value={user.work}
                        onChange={handleInput}
                        placeholder='Profession'/>
                      </div>
                      
                      <div className='form-group'>
                        <label htmlFor='password'>
                        <i class="fas fa-lock"></i>
                        </label>
                        <input type="password" name="password" id="password" autoComplete='off'
                        value={user.password}
                        onChange={handleInput}
                        placeholder='Password...'/>
                      </div>

                      
                      <div className='form-group'>
                        <label htmlFor='cpassword'>
                        <i class="fas fa-lock"></i>
                        </label>
                        <input  type="password" name="cpassword" id="cpassword" autoComplete='off'
                        value={user.cpassword} 
                        onChange={handleInput}
                        placeholder='Confirm Password...'/>
                      </div>

                      <div className='form-group from-button'> 
                      <button className='button' onClick={postData}>Register</button>
                      </div>
                      <div className='text'>
                        Already have account <span><Link to='/login'>login</Link></span> here
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </section>

  </>;
}

export default SIgnup;
