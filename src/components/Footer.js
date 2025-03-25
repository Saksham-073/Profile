import React from 'react';
import { Home, ChevronLeft, ChevronRight } from "lucide-react";

const Footer = ({ setPage, currentPage, totalPages, handleNext, handlePrev }) => {
    return (
        <div className="flex justify-center items-center">
            <button onClick={() => setPage(1)} className="cursor-pointer hover:text-gray-400">
                <Home color='#8c8c8c' size={20} />
            </button>

            <button onClick={handlePrev} className=" cursor-pointer mx-2 hover:text-gray-500">
                <ChevronLeft color='#8c8c8c' size={20} />
            </button>

            <span className="text-gray-400 text-sm" style={{color:"#4b4b4b"}}>
                {currentPage} of {totalPages}
            </span>

            <button onClick={handleNext} className=" cursor-pointer mx-2 hover:text-gray-500">
                <ChevronRight color='#8c8c8c' size={20} />
            </button>
        </div>
    );
};

export default Footer;
