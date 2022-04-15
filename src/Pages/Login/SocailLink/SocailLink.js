import React from 'react';
import googleImg from '../../../images/social/Google_icon.png';
import FacebookImg from '../../../images/social/facebook.png';
import gitHubImg from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.config';
import { useNavigate } from 'react-router-dom';
import Loading from '../../LoadingPage/Loading';
const SocailLink = () => {
    const [signInWithGoogle, user,loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, usergit, loadingGit,errorgit] = useSignInWithGithub(auth);
    const navigation = useNavigate();

    if(loading ||loadingGit){
        return <Loading></Loading>
    }
    
    let errorElement;
    if (error || errorgit) {
       errorElement = <p className='text-danger'>Error: {error?.message} {errorgit?.message}</p>
         
        ;
      }
      if (user || usergit) {
       navigation('/home');
      }


    return (
        <div className="text-center">
             <div className='d-flex align-items-center mt-0 '>
            <div style={{height:"1px"}} className='bg-dark w-50'></div>
            <p className='px-1 pt-3'>or</p>
            <div  style={{height:"1px"}} className='bg-dark w-50'></div>
        </div>
        {/* google Sign In Button */}
        <div>
        {errorElement}
         <button onClick={()=>signInWithGoogle()} className="btn btn-info w-75 mb-2 py-1"> <img src={googleImg} alt="" width={23} />
            <span className='ps-2' style={{fontSize:'16px',margin:'0'}}>Google Sign In</span> </button>
            </div>
              

{/* Facebook Sign In Button */}
 <div>
         <button className="btn btn-info w-75 mb-2 py-1"> <img src={FacebookImg} alt="" width={20} />
            <span className='ps-2 ' style={{fontSize:'16px',margin:'0'}}>Google Sign In</span> </button>
            </div>

{/* Github Sign In Button */}
        <div>
         <button onClick={()=>signInWithGithub()} className="btn btn-info w-75 py-1"> <img src={gitHubImg} alt="" />
            <span className='ps-2 ' style={{fontSize:'16px',margin:'0'}}>Google Sign In</span> </button>
            </div>
        </div>
    );
};

export default SocailLink;