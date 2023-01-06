import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../lib/routes';
import { useAuth } from '../../Hooks/auth';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  const navigate = useNavigate();
   const location = useLocation();//location object
  //  console.log(location)
   const { pathname } = location;
  //  console.log(pathname); //pathname will provide us with:  /protected/score

   //here we will be making our own custom hook that will be coming from hooks folder
   const {user, isLoading} = useAuth();
  //if user is null, then it will redirect back to login page.
   useEffect(() => {
    //is the pathname starts with "/protected" we willl redirect the user back to login page unless it gets  verified.

    if(pathname.startsWith("/protected")&& !user) {
      // console.log("this is protected route")
      navigate(LOGIN)
    }
   }, [pathname, user])

   if (isLoading) return "Loading"

  return (
    <div>
      <Navbar/>
      <Outlet/>
      {/* with the help of outlet component React Router gets to know where to insert the children. */}
    </div>
  )
}

export default Layout
