import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react'


import './App.css'
import Landing from './assets/pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup'
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/landing" exact element={<Landing />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>  
    </>
  )
}

export default App
