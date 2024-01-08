import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

const[user,setUser] = useState({
  name:'',
  email:'',
  password:'',
  age:''
})

function handleInput(event){
  setUser((prevDetails)=>{
    return{...prevDetails,[event.target.name]:event.target.value}
  })
}

function handleSubmit(event){
  event.preventDefault()
console.log(user)
}

  return (
    <>
  <section className='form-box'>
         <form action="" className='form' onSubmit={handleSubmit}>
            <h1>Register For Fitness</h1>
            <input onChange={handleInput} name='name' type="text" className='inp' placeholder='Enter Name'  value={user.name}/>
            <input onChange={handleInput} name='email' type="email" className='inp' placeholder='Enter Email' value={user.email}/>
            <input onChange={handleInput} name='password' maxLength={8} type="password" className='inp' placeholder='Enter Password' value={user.password}/>
            <input onChange={handleInput} name='age' min={12} max={100} type="number" className='inp' placeholder='Enter Age' value={user.age}/>
            <button className='btn'>Register</button>
            <p>Alredy Register ? <Link className='link' to="/login">Login</Link></p>

         </form>
  </section>
    </>
  )
}

export default Register