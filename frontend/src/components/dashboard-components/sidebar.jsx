import { FaHome, FaTools, FaMedal, FaBlog, FaPhone, FaChartLine, FaLock } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-screen w-64 fixed top-0 left-0 flex flex-col justify-between" style={{ marginTop: '96px' }}>
            <div className="pt-16 px-4">
                <ul className="space-y-4">
                    <li className="flex items-center space-x-2 text-white text-lg cursor-pointer">
                        <FaHome />
                        <span>Home</span>
                    </li>
                    <li className="flex items-center space-x-2 text-white text-lg cursor-pointer">
                        <FaTools />
                        <span>Skills</span>
                    </li>
                    <li className="flex items-center space-x-2 text-white text-lg cursor-pointer">
                        <FaMedal />
                        <span>Achievements</span>
                    </li>
                    <li className="flex items-center space-x-2 text-white text-lg cursor-pointer">
                        <FaBlog />
                        <span>Blog</span>
                    </li>
                    <li className="flex items-center space-x-2 text-white text-lg cursor-pointer">
                        <FaPhone />
                        <span>Contact</span>
                    </li>
                    <li className="flex items-center space-x-2 text-white text-lg cursor-pointer">
                        <FaChartLine />
                        <span>Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2 text-white text-lg cursor-pointer">
                        <FaLock />
                        <span>Loginizer security</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
