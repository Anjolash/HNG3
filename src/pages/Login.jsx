import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";





const Login = ({ numberOfItems}) => {
    const navigate = useNavigate();
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login }  = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e){
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            console.log("logging in user with email:", emailRef.current.value);
            await login(emailRef.current.value, passwordRef.current.value)
            console.log("Login successful! Yesssss!");
            navigate("/landing"); 
        }
        catch(error){
            console.log("login error", error)
            setError("Failed to log in", error)
        }
        setLoading(false)
    }

    async function handleLogout(e){
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            await logout()
        }
        catch(error){
            console.log("logout error", error)
        }
    }

    


    
    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh"  }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className='w-100 mt-4' type='submit'>Log In</Button>
                            <p className='mt-4 text-center' >don't have an account?</p>
                            <Link to="/signup" className='d-flex align-items-center justify-content-center'>  
                                <Button>Sign Up</Button>
                            </Link>      
                            <p className='mt-2 text-center'>or</p>
                            <Link to="/landing" className='d-flex align-items-center justify-content-center'>
                                <Button>View as Guest</Button>
                            </Link>    
                        </Form>
                    </Card.Body>
                    
                </Card>
            </div>    
        </Container>
    );
}

export default Login;
