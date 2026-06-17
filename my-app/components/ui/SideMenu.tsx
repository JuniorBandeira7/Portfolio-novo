import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function SideMenu() {
    return (
        <nav className="md:block hidden fixed top-1/2 left-0  shadow-md p-4 rounded-r-lg bg-white">
            <ul className="list-none gap-12 flex flex-col">
                <li className="hover:text-blue-500 transition-colors duration-300 text-3xl cursor-pointer"><BsLinkedin /></li>
                <li className="hover:text-gray-500 transition-colors duration-300 text-3xl cursor-pointer"><FaGithub /></li>
                <li className="hover:text-pink-500 transition-colors duration-300 text-3xl cursor-pointer"><FaInstagram /></li>
            </ul>
        </nav>
    )
}