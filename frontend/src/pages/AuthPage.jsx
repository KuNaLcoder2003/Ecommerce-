import React from 'react'
import { Link } from 'react-router-dom'

const AuthPage = ({type = "login"}) => {
    return (
        <div>
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
                        {type === "login" ? "Login to Your Account" : "Create an Account"}
                    </h2>
                    <form className="space-y-4">
                        {type === "signup" && (
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {type === "signup" && (
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        )}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-600"
                        >
                            {type === "login" ? "Login" : "Sign Up"}
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        {type === "login" ? (
                            <>
                                Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
                            </>
                        ) : (
                            <>
                                Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
