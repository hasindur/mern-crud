import Button from 'react-bootstrap/Button';


function CreateUser() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-purple-900  to-blue-900 p-6">
            <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-10 max-w-sm w-full text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Add User</h2>
                <form className="space-y-4">
                    <input
                        type="name"
                        placeholder="Name"
                        className="form-control bg-white/30 border-0 text-black placeholder-white focus:ring-2 focus:ring-pink-400  m-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control bg-white/30 border-0 text-black placeholder-white focus:ring-2 focus:ring-pink-400  m-2"
                    />
                    <input
                        type="age"
                        placeholder="Age"
                        className="form-control bg-white/30 border-0 text-black placeholder-white focus:ring-2 focus:ring-pink-400  m-2"
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