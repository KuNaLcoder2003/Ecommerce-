import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = ({setLoggedIn}) => {
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        avatar: '',
    })
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files)
        setUserData({ ...userData, avatar: file });
    };

    function handleSignUp(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("first_name", userData.first_name);
        formData.append("last_name", userData.last_name);
        formData.append("username", userData.email);
        formData.append("password", userData.password);
        formData.append("role", "User");
        formData.append("avatar", userData.avatar); // Append file
       
        try {
            fetch('https://ksecombe.onrender.com/signup', {
                method: 'POST',
                body: formData
            }).then(async (res) => {
                const data = await res.json();
                if (data.token) {
                    localStorage.setItem('token', `Bearer ${data.token}`)
                    toast.success(data.message)
                    setLoggedIn(true)
                    navigate('/')
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

            <Toaster />

            <div className='flex min-h-screen items-center justify-center bg-gray-100'>
                <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>

                    <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">Create your Account</h2>

                    <form className="space-y-4" onSubmit={(e) => handleSignUp(e)}>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={userData.first_name}
                            onChange={(e) => setUserData({
                                ...userData,
                                first_name: e.target.value
                            })}
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={userData.last_name}
                            onChange={(e) => setUserData({
                                ...userData,
                                last_name: e.target.value
                            })}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={userData.email}
                            onChange={(e) => setUserData({
                                ...userData,
                                email: e.target.value
                            })}
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="Password"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={userData.password}
                            onChange={(e) => setUserData({
                                ...userData,
                                password: e.target.value
                            })}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleFileChange}
                        />
                        <button type="submit" className="w-full rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-600">Sign Up</button>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Already have an account? <Link to="/signin" className="text-blue-500">Sign In</Link>
                        </p>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default SignUpPage
