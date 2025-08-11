import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function User() {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(result => setUsers(result.data))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deleteUser/` + id)
            .then(result => {
                console.log(result)
                // Instead of reload, update state for smoother UI
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="min-h-screen bg-gradient-to-t from-purple-900 to-blue-900 flex justify-center items-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h1 className="text-3xl font-extrabold text-gray-900">User Management</h1>
                    <Link
                        to="/create-user"
                        className="btn btn-primary rounded-full px-6 py-2 text-lg font-semibold transition-transform hover:scale-110 hover:shadow-lg"
                    >
                        Add User
                    </Link>
                </div>

                <table className="table-auto w-full text-left">
                    <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        <tr>
                            {['Name', 'Email', 'Age', ''].map((heading) => (
                                <th key={heading} className="py-4 px-6 font-semibold text-lg">{heading}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                            <tr
                                key={user._id}
                                className="transition-transform transform hover:scale-[1.02] hover:shadow-lg hover:bg-purple-50 cursor-pointer"
                            >
                                <td className="py-4 px-6 font-semibold text-gray-900">{user.name}</td>
                                <td className="py-4 px-6 text-gray-700">{user.email}</td>
                                <td className="py-4 px-6 text-gray-700">{user.age}</td>
                                <td className="py-4 px-6 flex justify-center space-x-4">
                                    <Link
                                        to={`/update-user/${user._id}`}
                                        className="btn btn-outline-primary rounded-full px-5 py-1 font-semibold transition-transform hover:scale-110 hover:shadow-md"
                                    >
                                        Update
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDelete(user._id)}
                                        className="rounded-full px-5 py-1 font-semibold transition-transform hover:scale-110 hover:shadow-md animate-bounce-on-hover"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center py-10 text-gray-500">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Tailwind custom animation for bounce on hover */}
            <style>{`
        .animate-bounce-on-hover:hover {
          animation: bounce 0.6s;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
        </div>
    );
}
