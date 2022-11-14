import React from 'react'
// // import { GoMail } from 'react-icons/go';
// import '../App.css';
// // import Navbar from './Navbar';
// import {motion} from 'framer-motion';
// import hostel from '../images/hostel.json'
// import Lottie from 'lottie-react';
// import logo from '../images/logo-removebg-preview.png'
// import background from '../images/background.png'
// import { useAuth0 } from "@auth0/auth0-react";
// // import { useAuth0 } from "@auth0/auth0-react";


// export default function SignUpPage() {
//   // const { loginWithRedirect } = useAuth0();
// //   const myStyle={
// //     fontFamily: 'Telma'
// //   }
//   const hostelStyle={
//     height:"auto",
//     width:500,
//     marginTop: -40
//   }
//   const LoginButton = () => {
//     const { loginWithRedirect } = useAuth0();
//   };
  
  
//   return (

//     <form>
//        {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}


//         <motion.div className="right w-12 sm:wt-3 cursor-pointer m-5 ">
//             <motion.img src={logo} alt="" 
//               animate={{
//                 y: '0px',
//                 opacity: 1
//               }}
//               initial={{
//                 opacity:0,
//               }}
//               transition={{
//                 duration: 2,
//               }}
              
//             />
//         </motion.div>
//     <div className='flex justify-between items-center min-h-80 mt-6'>
//       <div className="right translate-x-24">
//         <div className="svg ">
//           <Lottie animationData={hostel} style={hostelStyle}/>
//         </div>
//       </div>
//       <motion.div className="left z-40 "
//         animate={{
//           x:"-240px",
//           opacity: 1,
//         }}
//         initial={{
//           opacity: 0.2,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 70,
//         }}
//       >
//         <img className='absolute -z-10 ' style={{scale: 2}} src={background} alt="" />
//         <div>
            
//             <div className="info ml-10 truncate ">
//                 <p className=' text-xs sm:text-sm mb-2 '>Enter your details below</p>
//                 <div className="details flex flex-col">
//                   <div className='flex items-center'>
//                     {/* <i className='text-2xl '><GoMail/></i> */}
//                     <input className=" mt-5 mb-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3  shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-3 sm:text-sm" placeholder="Enter ID" type="search" name="search" onChange={e=>this.setState({profilename:e.target.value})}/>
//                   </div>
                  
//                   <input className="  mb-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-3 sm:text-sm" placeholder="Create Password" type="password" name="search" onChange={e=>this.setState({pin:e.target.value})}/>
//                   <input className="  mb-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-3 sm:text-sm" placeholder="Phone Number" type="text" name="search"  onChange={e=>this.setState({phone:e.target.value})}/>
                   
//                 </div>
//                 <motion.div className="btn"
//                   whileHover={{
//                     scale: 1.2
//                   }}
//                   whileTap={{
//                     scale: 0.8
//                   }}
//                 >
//                   <button onClick={() => LoginButton()} className='ml-16 mb-5 bg-gradient-to-r from-orange-400 to-red-600  p-2 pl-5 pr-5 text-white rounded-full'>Sign Up</button>
//                 </motion.div>
                
//             </div>
//         </div>
//       </motion.div>
//     </div>
//     </form>
    
//   )
// }
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;

