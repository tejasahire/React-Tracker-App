import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <section className='form-box'>
         <form action="" className='form'>
            <h1>Login To Become The Best Version</h1>
            <input type="email" className='inp' placeholder='Enter Email' />
            <input type="password" className='inp' placeholder='Enter Password' />
            <button className='btn'>Get In</button>
            <p>Not Register ? <Link className='link' to="/register">Ctreate a account</Link></p>
         </form>
  </section>
    </>
  )
}

export default Login