import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import User from './assets/User';
import CreateUser from './assets/CreateUser';
import UpdateUser from './assets/UpdateUser';



function App() {
  const [user, setUser] = useState(0);


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-purple-900  to-blue-900 p-6">

        <BrowserRouter >
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/update" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>

      </div >
    </>
  )
}

export default App
