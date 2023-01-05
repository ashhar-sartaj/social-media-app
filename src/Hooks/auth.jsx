// we willl be using react firebase hooks to get the user state from firebase.
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../context/firebaseConfig';
import { DASHBOARD } from '../lib/routes';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export const useAuth = () => {
    const [authUser, isLoading, error] = useAuthState(auth);
    
    return { user: authUser, isLoading: isLoading };
};

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const login = async ({email, password, redirectTo=DASHBOARD}) => {
        setIsLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast({
                title: "Ypu are logged in!",
                status: "success",
                isClosable: true,
                positiion: "top",
                duration: 5000
            });
            navigate(redirectTo)
        } catch(error) {
            toast({
                title: "Logging in failed!",
                description: "error.message",
                status: "error",
                isClosable: true,
                positiion: "top",
                duration: 5000,
            })
            return false;//if login failed
        }
        setIsLoading(false)
        return true;//if login succeeded
    }
    return {login, isLoading}
}