import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import User from './assets/User';
import CreateUser from './assets/CreateUser';
import UpdateUser from './assets/UpdateUser';



function App() {
  const [user, setUser] = useState(0);


  return (

    <div >

      <BrowserRouter >
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>

    </div >

  )
}

export default App
