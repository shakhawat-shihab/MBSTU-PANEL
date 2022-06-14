import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirerbase';
const LogIn = () => {
    const { user, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const logInWithGoogle = () => {
        signInWithGoogle(location, history);
        console.log('login')
    }
    return (
        <div>
            <h2>THis is Login</h2>
            <Button variant='success' onClick={logInWithGoogle}>Log In With Google</Button>
        </div>
    );
};

export default LogIn;