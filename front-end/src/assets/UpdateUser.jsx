import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/user/' + id)  // Assuming you fixed your backend to handle this route
            .then(result => {
                console.log(result)
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
            })
            .catch(err => console.error(err));
    }, []);
    const Update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/user/' + id, { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-purple-900  to-blue-900 p-6">
            <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-10 max-w-sm w-full text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Update User</h2>
                <form className="space-y-4" onSubmit={Update}>
                    <input
                        type="name"
                        placeholder="Name"
                        className="form-control bg-white/30 border-0 text-black placeholder-white focus:ring-2 focus:ring-pink-400  m-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control bg-white/30 border-0 text-black placeholder-white focus:ring-2 focus:ring-pink-400  m-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="age"
                        placeholder="Age"
                        className="form-control bg-white/30 border-0 text-black placeholder-white focus:ring-2 focus:ring-pink-400  m-2"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary w-100 m-2">Update</button>

                </form>

            </div>

        </div >

    )
}

export default UpdateUser