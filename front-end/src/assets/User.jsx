import Button from 'react-bootstrap/Button';

export default function User() {
    return (
        <div className="flex items-center justify-center  h-screen">
            <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-10 max-w-sm w-full text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">User Login</h2>
                <form className="space-y-4">


                </form>
                <p className="mt-4 text-center text-white/80 text-sm">
                    Don't have an account? <a href="#" className="underline hover:text-white">Sign up</a>
                </p>
            </div>

        </div >
    );
}
