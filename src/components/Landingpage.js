import React from "react";

const Landingpage = ({ setPage }) => {
    return (
        <div className="flex flex-col   ">
            <h2 className="text-xl font-bold text-gray-800 text-left mb-3 ">Welcome to PopX</h2>
            <p className="text-gray-600 text-sm text-left mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="text-center w-full">
                <button
                    onClick={() => setPage(3)}
                    className="w-full rounded-md p-2 text-sm font-semibold text-white shadow-md cursor-pointer my-2 transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: "#6c25ff" }}
                >
                    Create Account
                </button>
                <button
                    onClick={() => setPage(2)}
                    className="w-full rounded-md text-black p-2 text-sm font-semibold shadow-md cursor-pointer transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: "#cebafb" }}
                >
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
};

export default Landingpage;
