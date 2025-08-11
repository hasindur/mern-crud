import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import CreateUser from './CreateUser';

export default function User() {
    // Placeholder for user data, replace with actual data fetching logic
    const [users, setUsers] = React.useState([{ name: 'John ', email: 'd3Ht6@example.com', age: 30 }]);
    return (
        <div className="min-h-screen bg-gradient-to-t from-purple-900 to-blue-900 flex justify-center items-center p-6">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl">
                <Link to="/create-user" className="btn btn-primary m-4 rounded-pill px-4">Add User</Link>
                <table className="table table-hover align-middle mb-0">
                    <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Age</th>
                            <th className="py-3 px-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-purple-50 transition">
                                <td className="py-3 px-4 font-semibold">{user.name}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.age}</td>
                                <td className="py-3 px-4 text-center">
                                    <Link to="/update-user" className="btn btn-primary m-4 rounded-pill px-4">Update</Link>
                                    <Button variant="danger" className="m-1 rounded-pill px-4">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>



    );
}
