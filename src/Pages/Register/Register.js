import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
const HandleRegisterForm = (event)=>{
event.preventDefault()
 const name = event.target.name.value;
 const email = event.target.email.value;
 const password = event.target.passwword.value;
console.log( );

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
                <input className="button" type="submit" value="Register" />
              </form>
              <p className='text-center text-danger h6'>Already Have an account? <Link to="/login" className='text-danger pointer text-decoration-none'>Please Login</Link> </p>
            </div>
          </div>
        </div>
      </div>
     
     
    );
};

export default Register;