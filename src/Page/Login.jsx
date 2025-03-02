import AuthIllustration from '../assets/images/auth_illustration.png';
import { Link } from 'react-router-dom';
import LoginForm from '../Components/auth/LoginForm';

export default function Login() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-deepDark px-6 h-5">
            <div className="w-full max-w-2xl flex flex-col lg:flex-row items-center gap-8 bg-gray-900 p-8 rounded-2xl shadow-lg">
                {/* Left Side - Illustration & Text */}
                <div className='flex flex-col items-center'>
                    <section className="flex flex-col items-center text-center lg:w-1/2">
                        <img
                            src={AuthIllustration}
                            alt="Illustration of social media authentication"
                            className="w-40 lg:w-48 aspect-square object-cover"
                            loading="lazy"
                        />
                        <h1 className="text-3xl font-bold text-white mt-4">Facehook</h1>
                        <p className="text-gray-400 text-sm max-w-xs mt-2">
                            A social media app where you can share posts, react, and engage.
                        </p>
                    </section>

                </div>
                <div>
                    {/* Right Side - Login Form */}
                    <section className="w-full lg:w-1/2">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-white text-center mb-4">Login</h2>
                            <LoginForm />
                            <p className="text-gray-400 text-center text-sm mt-4">
                                Don’t have an account?{' '}
                                <Link
                                    to="/register"
                                    className="text-lwsGreen hover:underline transition duration-200"
                                >
                                    Create New
                                </Link>
                            </p>
                        </div>
                    </section>
                </div>


            </div>
        </main>
    );
}