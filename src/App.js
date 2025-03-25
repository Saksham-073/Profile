import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import Footer from "./components/Footer";
import Landingpage from "./components/Landingpage";
import SignIn from "./components/SignIn";

const pageTitles = {
    1: "Welcome",
    2: "Sign In",
    3: "Sign Up",
    4: "Account Settings",
};

const AppLayout = () => {
    const [page, setPage] = useState(1);

    const [direction, setDirection] = useState(1);
    const totalPages = 4;

    const handleNext = () => {
        setDirection(1);
        setPage(prev => (prev === totalPages ? 1 : prev + 1));
    };

    const handlePrev = () => {
        setDirection(-1);
        setPage(prev => (prev === 1 ? totalPages : prev - 1));
    };

    const renderPage = () => {
        switch (page) {
            case 1:
                return <Landingpage setPage={setPage} />;
            case 2:
                return <SignIn setPage={setPage} />;
            case 3:
                return <SignUp setPage={setPage} />;
            case 4:
                return <Account />;
            default:
                return <Landingpage />;
        }
    };

    const pageVariants = {
        enter: direction => ({ x: `${direction * 100}%` }),
        center: { x: "0%" },
        exit: direction => ({ x: `${-direction * 100}%` }),
    };

    return (
        <div className="flex flex-col h-screen">
            <header className="fixed top-0 w-full bg-white text-gray-500 p-2 shadow-sm">
                {pageTitles[page]}
            </header>
            <main className="flex-grow flex items-center justify-center pt-16 pb-16 bg-gray-100">
                <div className="w-full max-w-sm h-full bg-white border border-gray-300 p-6  flex justify-center items-end relative ">
                    <AnimatePresence custom={direction} mode="popLayout">
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={pageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="w-full"
                        >
                            {renderPage()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 w-full  text-gray-200 p-4 text-center h-16 shadow-md flex items-center justify-center">
                <Footer setPage={setPage} currentPage={page} totalPages={totalPages} handleNext={handleNext} handlePrev={handlePrev} />
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
