import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const SignInPage = ({setLoggedIn}) => {
    const [userData , setUserData] = useState({
        username : '',
        password : '',
    })
    const navigate = useNavigate()

    function handleSignIn(e) {
            e.preventDefault();

           
            try {
                fetch('https://ksecombe.onrender.com/api/v1/user/signin', {
                    method: 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        username : userData.username,
                        password : userData.password
                    })
                }).then(async (res) => {
                    const data = await res.json();
                    if (data.token) {
                        localStorage.setItem('token', `Bearer ${data.token}`)
                        navigate('/')
                        toast.success(data.message)
                        setLoggedIn(true)
                    } else {
                        toast.error(data.message);
                    }
                })
            } catch (error) {
                toast.error(error)
            }
        }
    return (
        <div>
            <Toaster/>
            <div className='flex min-h-screen items-center justify-center bg-gray-100'>
                <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>

                    <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
                        Login Into Your Account
                    </h2>

                    <form className='space-y-4' onSubmit={(e)=>handleSignIn(e)}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={userData.username}
                            onChange={(e)=>setUserData({
                                ...userData , 
                                username : e.target.value
                            })}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={userData.password}
                            onChange={(e)=>setUserData({
                                ...userData,
                                password : e.target.value
                            })}
                        />

                        <button type="submit" className="w-full rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-600">Login</button>

                        <p className="mt-4 text-center text-sm text-gray-600">
                            Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SignInPage
