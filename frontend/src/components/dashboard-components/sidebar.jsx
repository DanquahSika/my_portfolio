import { FaHome, FaUser, FaChartBar, FaAward, FaComment, FaBlog, FaBriefcase, FaClipboardList } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const scrollToSection = (id) => {
        window.location.href = `#${id}`;
    };

    return (
        <aside className="bg-black text-white h-full w-64 flex flex-col justify-between">
            <div className="p-4">
                <ul className="space-y-2">
                    <li
                        className={`flex items-center text-2xl cursor-pointer ${selectedItem === 'dashboard' ? 'text-blue-500' : ''}`}
                        onClick={() => {
                            scrollToSection('dashboard');
                            setSelectedItem('dashboard');
                        }}
                        onMouseEnter={() => setSelectedItem('dashboard')}
                        onMouseLeave={() => setSelectedItem('')}
                    >
                        <FaHome className="mr-2" />
                        Dashboard
                    </li>
                    <li
                        className={`flex items-center cursor-pointer ${selectedItem === 'profile' ? 'text-blue-500' : ''}`}
                        onClick={() => {
                            scrollToSection('profile');
                            setSelectedItem('profile');
                        }}
                        onMouseEnter={() => setSelectedItem('profile')}
                        onMouseLeave={() => setSelectedItem('')}
                    >
                        <FaUser className="mr-2" />
                        Profile
                    </li>
                    <li
                        className={`flex items-center cursor-pointer ${selectedItem === 'skills' ? 'text-blue-500' : ''}`}
                        onClick={() => {
                            scrollToSection('skills');
                            setSelectedItem('skills');
                        }}
                        onMouseEnter={() => setSelectedItem('skills')}
                        onMouseLeave={() => setSelectedItem('')}
                    >
                        <FaChartBar className="mr-2" />
                        Skills
                    </li>
                    <li
                        className={`flex items-center cursor-pointer ${selectedItem === 'achievements' ? 'text-blue-500' : ''}`}
                        onClick={() => {
                            scrollToSection('achievements');
                            setSelectedItem('achievements');
                        }}
                        onMouseEnter={() => setSelectedItem('achievements')}
                        onMouseLeave={() => setSelectedItem('')}
                    >
                        <FaAward className="mr-2" />
                        Achievements
                    </li>
                    <li
                        className={`flex items-center cursor-pointer ${selectedItem === 'messages' ? 'text-blue-500' : ''}`}
                        onClick={() => {
                            scrollToSection('messages');
                            setSelectedItem('messages');
                        }}
                        onMouseEnter={() => setSelectedItem('messages')}
                        onMouseLeave={() => setSelectedItem('')}
                    >
                        <FaComment className="mr-2" />
                        Messages
                    </li>
                    <li
                        className={`flex items-center cursor-pointer ${selectedItem === 'blog' ? 'text-blue-500' : ''}`}
                        onClick={() => {
                            scrollToSection('blog');
                            setSelectedItem('blog');
                        }}
                        onMouseEnter={() => setSelectedItem('blog')}
                        onMouseLeave={() => setSelectedItem('')}
                    >
                        <FaBlog className="mr-2" />
                        Blog
                    </li>
                    
                    <li
                        className={`flex items-center cursor-pointer ${selectedItem === 'projects' ? 'text-blue-500' : ''}`}
                        onClick={() => {
                            scrollToSection('projects');
                            setSelectedItem('projects');
                        }}
                        onMouseEnter={() => setSelectedItem('projects')}
                        onMouseLeave={() => setSelectedItem('')}
                    >
                        <FaBriefcase className="mr-2" />
                        Projects
                    </li>
                    <li
                        className={`flex items-center cursor-pointer ${selectedItem === 'experiences' ? 'text-blue-500' : ''}`}
                        onClick={() => {
                            scrollToSection('experiences');
                            setSelectedItem('experiences');
                        }}
                        onMouseEnter={() => setSelectedItem('experiences')}
                        onMouseLeave={() => setSelectedItem('')}
                    >
                        <FaClipboardList className="mr-2" />
                        Experiences
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
