// // import { getAuth } from 'firebase/auth';
// import React, { createContext } from 'react';
// // import { sendEmailVerification } from 'firebase/auth';
// import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import auth from '../../../firebase.init';
// // import auth from '../../../firebase.init';
// import Loading from '../../Shared/Loading/Loading';
// export const AuthContext = createContext();
// // const auth = getAuth(auth)

// const RequireAuth = ({children}) => {
    
//     const [user, loading] = useAuthState(auth);
//     // const location = useLocation();
//     const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
//     const authInfo = {
//         user, 
//         loading
        
//     }
    
//     if(loading){
//         return <Loading></Loading>
//     }
//     // if(!user){
//     //     return <Navigate to="/login" state={{from: location}} replace />
//     // }
//     if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
//         return <div className='text-center mt-5'>
//             <h3 className='text-danger'> Your email is not verified!</h3>
//             <h5 className='text-success'> Please verify your email address</h5>
//             <button className='btn btn-promary'
//             onClick={async () =>{
//                 await sendEmailVerification();
//                 toast('sent email');
//             }}
//             >Send Verification Email Again</button>
//             <ToastContainer></ToastContainer>
            

//         </div>
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//         {children}
//         </AuthContext.Provider>
//     )
    
    

// };

// export default RequireAuth;