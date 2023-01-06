import React from 'react'
import { Flex } from '@chakra-ui/react'
import { LOGIN } from '../../lib/routes'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useLogout } from '../../Hooks/auth'


const Navbar = () => {
  const {logout, isLoading} = useLogout();

  const navigate = useNavigate();
  const handleLogout= (e) => {
    e.preventDefault();
    navigate(LOGIN)
  }
  const Links = [
    {name: "Home", link: "/"},
    {name: "About", link: "/"},
    {name: "Reviews", link: "/"}
  ]
  return (
   <>
   <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
        Designer
      </div>
      <ul className='md: flex md:items-center'>
        {
          Links.map((link)=> (
            <li key={link.name} className="md:ml-8 text-xl">
              <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
            </li>
          ))
        }
      </ul>
      <Button ml="auto" colorScheme="teal" size="sm" onClick={logout} isLoading={isLoading}>Logout</Button>
      {/* <button className="bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500" onClick={handleClick}>Click Me</button> */}
    </div>
   </div>
   
   </>
 
  )
}

export default Navbar
