import { NavLink } from "react-router-dom";


const navLinkClass =
    "mx-2 px-3 py-1 rounded transition-colors duration-200 hover:bg-gray-700";
const activeClass = "bg-gray-700 font-semibold";

const Header = () => {
    return (
        <header className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md ">
            <div className="flex items-center">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.RdeGpZXza_h9PibvVP-U5gHaFs%26r%3D0%26pid%3DApi&f=1&ipt=446535b3fd88cd9ea0617f3510f1c8d89962771860a9095a336968f906633f0d&ipo=images"
                    alt="Logo"
                    width={50}
                    className="mr-3 rounded"
                />
                <span className="text-lg font-bold">Ruhul co</span>
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${navLinkClass} ${isActive ? activeClass : ""}`
                    }
                 index
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `${navLinkClass} ${isActive ? activeClass : ""}`
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `${navLinkClass} ${isActive ? activeClass : ""}`
                    }
                    index
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        `${navLinkClass} ${isActive ? activeClass : ""}`
                    }
                >
                    Services
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
