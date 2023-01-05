import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import {Route, RouterProvider } from 'react-router-dom'
import { router } from './lib/routes'


function App() {
  return (
    <>
      <ChakraProvider>
          <RouterProvider router={router}/>
      </ChakraProvider>

    </>
  )
}

export default App
