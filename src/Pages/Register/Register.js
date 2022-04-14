import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const navitageTo = ()=>{
          navigate('/login');
      }
      if(user){
          navigate('/home');
      }
const HandleRegisterForm = (event)=>{
event.preventDefault()
 const name = event.target.name.value;
 const email = event.target.email.value;
 const password = event.target.passwword.value;
 createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2> Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={HandleRegisterForm}>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                  <input type="password" name="password" placeholder="Password" required />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                  <input type="password" name="password" placeholder="Re-type Password" required />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input type="text" name="name" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input type="text" name="name" placeholder="Last Name" required />
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary w-100" type="submit">Submit</button>
              </form>
              <p className='text-center text-danger h6 mt-3'>Already Have an account? <Link to="/login" className='pointer text-decoration-none' onClick={navitageTo}>Please Login</Link> </p>
            </div>
          </div>
        </div>
      </div>
     
     
    );
};

export default Register;