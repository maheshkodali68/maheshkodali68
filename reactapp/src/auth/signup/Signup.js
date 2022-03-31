import { useForm }from'react-hook-form';
import React from 'react';
import './Signup.css'; 
import {Link} from 'react-router-dom'

function Signup(){
  const { register,handleSubmit,formState:{errors},reset,trigger}=useForm();
  const onSubmit=(data)=>{
    console.log(data);
    reset();
  };

console.log(errors);
  return(
    <div id='container-signup'>
        <div id='signupBox'>
            <center>
            <form id='submain' onSubmit={handleSubmit(onSubmit)}>
                <h2 id='title'>SIGN UP</h2>
                    <input
                        id='email'
                        type='Email'
                        name='email'
                        placeholder='Enter Email'
                        {...register("email",{required: "* Email Required" ,
                        pattern: {value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'Email Invalid.'}})}
                        onKeyUp={() =>{
                        trigger('email')}}
                    /><br/>
                    {errors.email && <small id='required'>{errors.email.message}</small>}
                    <br/>
                    <input 
                        id='password'
                        type='text'
                        name='pass'
                        placeholder='Enter Password'
                        {...register("pass",{required: "* Password is Required",
                        minLength: {
                        value: 8,
                        message: "Minimum Required is 8",
                        },
                        maxLength: {
                        value: 13,
                        message: "Maximum allowed is 13",
                        }
                        })}
                        onKeyUp={() => {
                        trigger("pass");
                        }}
                    /><br/>
                    {errors.pass && (
                        <small id='passworderror'>{errors.pass.message}</small>
                    )}
                    <br></br>
                    <input 
                        id="mobilenumber"
                        type='tel' 
                        name="mobilenumber"
                        placeholder='Enter Mobile Number'
                        {...register("mobilenumber",{required: "* Mobile Number is Required.",
                        pattern: {
                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: "Invalid phone no",
                        },
                        })}
                        onKeyUp={() =>{
                        trigger("mobilenumber");
                        }}
                    /><br/>
                    {errors.mobilenumber && (
                    <small id='mobileerror'>{errors.mobilenumber.message}</small>
                    )}
                    <br></br>
                    <select id="userrole"> 
                        <option>User</option>
                        <option>Admin</option>
                    </select>
                    <br/><br/>
                    <input 
                        id='username'
                        type='text'
                        name="username"
                        placeholder='Enter Username'
                        {...register("username",{required: "* Username is required"})}
                        onKeyUp={() =>{
                        trigger("username");
                        }}
                    /><br/>
                    {errors.username && (
                        <small id='usernameerror' >{errors.username.message}</small>
                    )}
                    <br></br>
                    <input 
                        id='age'
                        type='text'
                        name='age'
                        placeholder='Enter Age'
                        {...register("age",{required: "* Age is Required",
                        min: {
                            value: 18,
                            message: "Minimum Required age is 18",
                        },
                        max: {
                            value: 65,
                            message: "Maximum allowed age is 65",
                        },
                        pattern: {
                            value: /^[0-9]*$/,
                            message: "Only numbers are allowed",
                        }
                        })}
                        onKeyUp={() => {
                            trigger("age");
                        }}
                    /><br/>
                    {errors.age && (
                        <small id='required'>{errors.age.message}</small>)}
                    <br></br>
                    <button id='submitButton'>Submit</button>
                    <p id='link'>Go to Login <Link id='loginLink'to='/'>Click Here</Link></p>
                </form> 
                </center>
            </div>
        </div>
  )
}
export default Signup;
