import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="bg-gray-800 shadow">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="Logo"
                        className="h-10 w-10 mr-3"
                    />
                    <span className="text-white text-xl font-bold">MyApp</span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="text-white hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contract" className="text-white hover:text-gray-300">
                                Contract
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
