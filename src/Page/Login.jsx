import AuthIllustration from '../assets/images/auth_illustration.png';
import { Link } from 'react-router-dom';
import LoginForm from '../Components/auth/LoginForm';

export default function Login() {

    return (
        <main className="h-screen flex items-center justify-center bg-deepDark py-8">
            <div className="max-w-[1368px] w-full flex items-center justify-center">
                <div className="container grid items-center gap-8 lg:grid-cols-2">
                    <div>
                        <img
                            className="mb-12 max-w-full max-lg:hidden"
                            src={AuthIllustration}
                            alt="auth_illustration"
                        />
                        <div>
                            <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">Facehook</h1>
                            <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                                Create a social media app with features like showing posts,
                                post details, reactions, comments, and profiles.
                            </p>
                        </div>
                    </div>

                    <div className="card w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                        <LoginForm />
                        <div className="py-4 lg:py-6">
                            <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                                Don’t have an account?{' '}
                                <Link
                                    className="text-white transition-all hover:text-lwsGreen hover:underline"
                                    to='/register'
                                >
                                    Create New
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

