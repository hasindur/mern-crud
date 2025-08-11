import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [age, setAge] = React.useState('');
    const navigate = useNavigate();
    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users', { name: name, email: email, age: age })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-purple-900  to-blue-900 p-6">
            <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-10 max-w-sm w-full text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Add User</h2>
                <form className="space-y-4" onSubmit={Submit}>
                    <input
                        type="name"
                        placeholder="Name"
                        className="form-control bg-white/30 border-0 text-black placeholder-white focus:ring-2 focus:ring-pink-400  m-2"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control bg-white/30 border-0 text-black placeholder-white focus:ring-2 focus:ring-pink-400  m-2"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="age"
                        placeholder="Age"
                        className="form-control bg-white/30 border-0 text-black placeholder-white focus:ring-2 focus:ring-pink-400  m-2"
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary w-100 m-2">
                        Submit
                    </button>

                </form>

            </div>

        </div >
    )
}

export default CreateUser