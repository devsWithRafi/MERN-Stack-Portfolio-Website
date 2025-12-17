import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth, googleProvider } from '../firebase/firebase.config';
import aveterImage from '../assets/default-avater.png';

import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoEyeOffOutline } from 'react-icons/io5';
import { IoEyeOutline } from 'react-icons/io5';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

// Only for admin
const ALLOWED_EMAIL = ['YOUR-FIRST-EMAIL', 'YOUR-SECOND-EMAIL@gmail.com'];

const Login = () => {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const email = result.user.email;

            if (!ALLOWED_EMAIL.includes(email)) {
                alert('Access denied!');
                await auth.signOut();
                return;
            }
            // navigate to home page route
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            'This Fetures is currently unabailable | Please Sign-In with Google'
        );
    };

    return (
        <section className="bg-white/5 backdrop-blur-[50px] border border-white/10 p-6 z-[1] py-10 w-[400px] rounded-xl shadow-md flex flex-col justify-between max-[420px]:w-[90%]">
            {/* email and password login */}
            <div className="w-full flex flex-col items-center">
                {/* aveter */}
                <div className="overflow-hidden rounded-full w-[110px] opacity-[0.3] mb-5 select-none pointer-events-none">
                    <img src={aveterImage} className="w-full h-full relative" />
                </div>
                {/* form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-2 py-2"
                >
                    <div className="border border-white/20 px-3 flex items-center gap-2 font-medium text-gray-500 rounded-xl focus-within:border-gray-500">
                        <MdOutlineEmail size={20} />
                        <input
                            required
                            type="text"
                            placeholder="Email ID"
                            className="w-full py-2 outline-0 border-0 bg-transparent placeholder:text-gray-500 text-gray-400"
                        />
                    </div>
                    <div className="border border-white/20 px-3 flex items-center gap-2 font-medium text-gray-500 rounded-xl focus-within:border-gray-500">
                        <RiLockPasswordLine size={20} />
                        <input
                            required
                            type={showPass ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full py-2 outline-0 border-0 bg-transparent placeholder:text-gray-500 text-gray-400"
                        />
                        {showPass ? (
                            <IoEyeOffOutline
                                size={20}
                                className="cursor-pointer"
                                onClick={() => setShowPass((prev) => !prev)}
                            />
                        ) : (
                            <IoEyeOutline
                                size={20}
                                className="cursor-pointer"
                                onClick={() => setShowPass((prev) => !prev)}
                            />
                        )}
                    </div>
                    <div className="flex items-center justify-between mt-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="accent-black" />
                            <p className="-mt-0.5">Remember me</p>
                        </div>
                        <p className="cursor-pointer hover:underline hover:text-gray-300">
                            Forgot Password?
                        </p>
                    </div>
                    {/* login button */}
                    <button
                        type="submit"
                        className="bg-zinc-900 uppercase text-white px-10 py-3 rounded-xl cursor-pointer shadow-md flex items-center justify-center font-medium gap-2 mt-5 hover:bg-black/80 ease-in-out duration-300"
                    >
                        login
                    </button>
                </form>
            </div>
            <div className="w-full flex flex-col gap-2">
                {/* google login */}
                <button
                    onClick={handleGoogleLogin}
                    className="bg-zinc-900 uppercase text-white px-10 py-3 rounded-xl cursor-pointer shadow-md flex items-center justify-center font-medium gap-2 hover:bg-black/80 ease-in-out duration-300"
                >
                    <FaGoogle />
                    <p>with google</p>
                </button>
            </div>
        </section>
    );
};

export default Login;
