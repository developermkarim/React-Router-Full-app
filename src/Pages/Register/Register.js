import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.config';
import { useCreateUserWithEmailAndPassword,useUpdateProfile} from 'react-firebase-hooks/auth';
import './Register.css';
import Loading from '../LoadingPage/Loading';
const Register = () => {
    const [agree, Setagree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const [updateProfile,updating] = useUpdateProfile(auth);

      const navigate = useNavigate();
      const navitageTo = ()=>{
          navigate('/login');
      }
      if(loading || updating){
          return <Loading></Loading>
      }
      if(user){
          console.log('user found', user);
      }
const HandleRegisterForm = async (event)=>{
event.preventDefault()
 const name = event.target.myName.value;
 const email = event.target.email.value;
 const pass = event.target.password.value;
 await createUserWithEmailAndPassword(email, pass);
 await updateProfile({displayName: name});
 console.log('Update Profile');
 navigate('/home');
    }
    
    return (
        <div className='mt-5'>
            <h2 className='text-center'>Registration Form</h2>
      <form className='w-25 mx-auto' onSubmit={HandleRegisterForm}>
  <div className="mb-3">
    <input type="text" className="form-control" name='myName' placeholder='Your Name' />
    </div>
  <div className="mb-3">
    <input type="email" className="form-control" placeholder='Email Address' name='email'/>
    </div>
  <div className="mb-3">
    <input type="password" className="form-control" name='password' placeholder='Password' />
  </div>
  <div className="mb-3 form-check">
    <input  type="checkbox" name='Terms' className="form-check-input" onClick={()=>Setagree(!agree)}/>
    {/* {agree? 'py-0 text-primary':'text-danger'}  */}
    <label className={`pe-3 ${agree ? 'text-primary':'text-danger'}`} >Genius car Terms And Condition</label>
  </div>
  <button disabled={!agree} type="submit" className="btn btn-primary w-100">Submit</button>
</form>
<p className='text-center text-danger h6 mt-3'>Already Have an account? <Link to="/login" className='pointer text-decoration-none' onClick={navitageTo}>Please Login</Link> </p>
</div>
     
     
    );
};

export default Register;
