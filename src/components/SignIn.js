import React, { useState } from 'react';

const SignIn = ({ setPage }) => {
    const [highlight, setHighlight] = useState(false);

    return (
        <div className="flex justify-center items-start h-[calc(100vh-8rem)]">
            <div className="w-full max-w-sm min-h-[400px] bg-white p-6 flex flex-col justify-center">
                <h2 className="text-xl font-bold text-gray-800 text-left mb-3 ">
                    Sign In to your PopX account
                </h2>
                <p className="text-gray-600 text-sm text-left mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="space-y-4 mt-4">
                    <div className="relative">
                        <label className="absolute top-[-10px] left-3 text-[13px] text-[#6C25FF] bg-white px-1 z-10 font-semibold">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="relative">
                        <label className="absolute top-[-10px] left-3 text-[13px] text-[#6C25FF] bg-white px-1 z-10 font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <button
                        className={`w-full py-2 text-white rounded-md cursor-pointer transition ${highlight ? "bg-blue-600" : "bg-[#CBCBCB]"}`}
                        onClick={() => { setHighlight(true); setTimeout(() => setHighlight(false), 300); setPage(4); }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
