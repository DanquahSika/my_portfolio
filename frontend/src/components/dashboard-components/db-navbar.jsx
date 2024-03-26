import { FaEdit, FaSyncAlt, FaComments, FaCog } from "react-icons/fa";
import { useState } from 'react';

export default function DbNavbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleRefresh = () => {
        console.log("Refreshing...");
    };

    const handleContacts = () => {
        console.log("Viewing contacts...");
    };

    const handleAddNew = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebarOpen state
    };

    const handleSettings = () => {
        console.log("Viewing settings...");
    };

    return (
        <div>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-4 px-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="text-white text-2xl font-bold ">Dashboard</div>
                    <div className="text-gray-200 cursor-pointer" onClick={handleRefresh}>
                        <FaSyncAlt className="text-xl" />
                    </div>
                    <div className="relative cursor-pointer" onClick={handleContacts}>
                        <div className="bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center">
                            <FaComments className="text-gray-600 text-xl" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">5</span>
                        </div>
                    </div>
                    <div className="relative cursor-pointer" onClick={handleAddNew}>
                        <div className="bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center">
                            <FaEdit className="text-gray-600 text-xl" />
                        </div>
                    </div>
                    <div className="text-gray-200 cursor-pointer" onClick={handleSettings}>
                        <FaCog className="text-xl" />
                    </div>
                </div>
                {sidebarOpen && (
                    <div className="absolute top-16 left-0 bg-white text-black p-4 rounded-lg shadow-lg">
                        <ul className="space-y-2">
                            <li className="border-b border-gray-600 py-4 hover:text-gray-800">Homepage</li>
                            <li className="border-b border-gray-600 py-4 hover:text-gray-800">Skills</li>
                            <li className="border-b border-gray-600 py-4 hover:text-gray-800">Awards</li>
                            <li className="border-b border-gray-600 py-4 hover:text-gray-800">Achievements</li>
                            <li className="border-b border-gray-600 py-4 hover:text-gray-800">Projects</li>
                            <li className="py-4 hover:text-gray-800">Blog</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
