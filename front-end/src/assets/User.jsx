import Button from 'react-bootstrap/Button';
import React from 'react';

export default function User() {
    // Placeholder for user data, replace with actual data fetching logic
    const [users, setUsers] = React.useState([{ name: 'John ', email: 'd3Ht6@example.com', age: 30 }]);
    return (
        <div className="d-flex vh-100 align-items-center justify-content-center   h-screen bg-amber-200">
            <div className="text-center w-50 bg-amber-500 rounded-3xl p-3">
                <table>
                    <thead>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Button variant="primary" className="m-2">Edit</Button>
                                    <Button variant="danger" className="m-2">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>


            </div>
        </div>


    );
}
