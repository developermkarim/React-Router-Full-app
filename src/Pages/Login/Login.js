import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const EmailRef = useRef();
    const PassRef = useRef();
    const FormHandle = event =>{
        event.preventDefault();
      const email =  EmailRef.current.value;
       const password =  PassRef.current.value;
       console.log(email, password);
    }
    return (
        <div>
        <h2 className='text-center mt-5'>Sign In Form</h2>
        <form className='w-25 mx-auto' onSubmit={FormHandle}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" ref={EmailRef} id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" ref={PassRef} id="exampleInputPassword1" required/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p className='text-center text-danger h6'>New To Genius Car? <Link to="/register" className='text-danger pointer text-decoration-none'>Please Register</Link> </p>
      </div>
    );
};

export default Login;