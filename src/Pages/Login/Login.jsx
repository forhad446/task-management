import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const Login = () => {

    const { signIn, user } = useAuth();
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email) {
            setError('please give your email');
            return console.log(error);
        } else if (!password) {
            setError('please give valid password');
            return console.log(error);
        } else {
            signIn(email, password)
                .then(() => {
                    Navigate('/dashboard')
                    form.reset();
                })
                .catch((error) => console.log(error.message))
        }
    }
    return (
        <div className="py-20">
            {
                user && <Navigate to="/dashboard" replace={true} />
            }
            <div className="flex h-full items-center justify-center">
                <div
                    className="rounded-lg border border-gray-200 bg-white shadow-md flex-col flex h-full items-center justify-center sm:px-4">
                    <div className="flex h-full flex-col justify-center gap-4 p-6">
                        <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-4" data-hs-cf-bound="true">
                                <h1 className="mb-4 text-2xl font-bold">Login</h1>
                                <div>
                                    <div className="mb-2">
                                        <label className="text-sm font-medium text-gray-900 "
                                            name="email">Email:</label>
                                    </div>
                                    <div className="flex w-full rounded-lg pt-1">
                                        <div className="relative w-full"><input
                                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                                            id="email" type="email" name="email" placeholder="email@example.com"
                                            required="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2">
                                        <label className="text-sm font-medium text-gray-900 "
                                            data-testid="flowbite-label" name="password">Password</label>
                                    </div>
                                    <div className="flex w-full rounded-lg pt-1">
                                        <div className="relative w-full"><input
                                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                                            id="password" type="password" name="password" required="" />
                                        </div>
                                    </div>
                                    <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">Forgot password?</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button type="submit"
                                        className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                                        <span
                                            className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                            Login
                                        </span>
                                    </button>
                                    <button type="button"
                                        className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                                        <span
                                            className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                            <FcGoogle />
                                            Sign in with Google
                                        </span>
                                    </button>
                                </div>
                            </form>
                            <div className="min-w-[270px]">
                                <div className="mt-4 text-center">New user?
                                    <a className="text-blue-500 underline hover:text-blue-600" href="/signup">Create account
                                        here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;