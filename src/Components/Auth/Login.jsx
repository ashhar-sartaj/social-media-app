import { Center, Box, Heading, FormControl, FormLabel, FormErrorMessage, Input, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useLogin } from '../../Hooks/auth'
import { DASHBOARD } from '../../lib/routes'

// import { passwordValidate } from '../../utils/form-validation'
// import { emailValidate } from '../../utils/form-validation'

const Login = () => {
  //using custok hook for login
  const {login, isLoading} = useLogin();
  const {register, handleSubmit, reset, formState: {errors}} = useForm(); //coming from react-hooks-form 
  console.log(errors);
  // if i provided invalid email and password for login then console.log(erros): 
//   email: Object { type: "pattern", message: "Please enter a valid email", ref: input#field-:r1:.chakra-input.css-1kp110w
//  }
// ​​
// message: "Please enter a valid email"
// ​​
// ref: <input id="field-:r1:" class="chakra-input css-1kp110w" type="email" placeholder="email" name="email" aria-invalid="true" aria-describedby="field-:r1:-feedback">
// ​​
// type: "pattern"
// ​​
// <prototype>: Object { … }
// ​
// password: Object { type: "pattern", message: "Enter valid passoword", ref: input#field-:r3:.chakra-input.css-1kp110w
//  }
// ​​
// message: "Enter valid passoword"
// ​​
// ref: <input id="field-:r3:" class="chakra-input css-1kp110w" type="password" placeholder="password" name="password" aria-invalid="true" aria-describedby="field-:r3:-feedback">
// ​​
// type: "pattern"

  const onSubmit = async (data) => {
    console.log(data)
    const loginSucceeded = await login({email: data.email, password: data.password, redirectTo: DASHBOARD} );
    if (loginSucceeded) reset(); //reset the entire form
  }
  
  

  return (
    <div>
      <Center w="100%" h="100vh">
        <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg" >
            <Heading mb="4" size="lg" textAlign="center">
                Login
            </Heading>
            {/* Form starting. We will be using form control of chakra ui */}
            {/* <form onSubmit={handleSubmit((data)=> console.log(data))}> */}
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={true} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="email" {...register("email", {
                      required: true,
                      pattern: {
                        value: /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g,
                        message: "Please enter a valid email"
                      }
                    })}></Input>
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={true} py="2">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="password" {...register("password", {
                      required: true,
                      pattern: {
                        value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/ ,
                        message: "Enter valid passoword"
                      }
                    })}></Input>
                    <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </FormControl>
                {/* SUBMIT Button */}
                <Button mt="4" type="submit" colorScheme="facebook" w="full" isLoading={false} loadingText="Logging In">Log In</Button>
            </form>

            <Text fontSize="xlg" align="center" mt="6">
                Don't have an account? {" "}
                <Link as={RouterLink} to="/register" color="blue.800" fontWeight="medium" textDecor="underline" _hover={{background: "teal.100"}}>Register</Link>
            </Text>
            {/* above, we had two link. One is of the chakra ui Link and the other one is the react router link as RouterLink. Link of chakra ui will style it and Link of react Router as RouterLink will behave as normal link of React Router */}
        </Box>  
      </Center>
    </div>
  )
}

export default Login
