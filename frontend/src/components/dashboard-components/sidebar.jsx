
import { FaHome, FaUser, FaChartBar, FaAward, FaComment, FaBlog, FaCog } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside className="bg-black text-white h-full w-64 flex flex-col justify-between">
            <div className="p-4">
                <ul className="space-y-2">
                    <li className="flex items-center text-2xl ">
                        <FaHome className="mr-2" />
                        Dashboard
                    </li>
                    <li className="flex items-center ">
                        <FaUser className="mr-2" />
                        Profile
                    </li>
                    <li className="flex items-center">
                        <FaChartBar className="mr-2" />
                        Skills
                    </li>
                    <li className="flex items-center">
                        <FaAward className="mr-2" />
                        Achievement
                    </li>
                    <li className="flex items-center">
                        <FaComment className="mr-2" />
                        Messages
                    </li>
                    <li className="flex items-center">
                        <FaBlog className="mr-2" />
                        Blog
                    </li>
                    <li className="flex items-center">
                        <FaCog className="mr-2" />
                        Setting
                    </li>
                </ul>
            </div>
            <div className="p-4">
                <ul className="space-y-2">
                
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
