
import { FaSearch, FaBell, FaComment, FaUser } from 'react-icons/fa';

const Header = () => {
  const scrollToMessages = () => {
      window.location.href = `#messages`;
  }
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md h-15">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <label htmlFor="search" className="sr-only">Type to search...</label>
          <input
            type="text"
            id="search"
            placeholder="Type to search..."
            className="border-2 border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 focus:outline-none cursor-pointer hover:text-blue-500"onClick={scrollToMessages}>
            <FaSearch />
          </button>
          <button className="text-gray-600 focus:outline-none cursor-pointer hover:text-blue-500"onClick={scrollToMessages}>
          
            <FaBell />
          </button>
          <button className="text-gray-600 focus:outline-none">
            <FaComment />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="profile.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-800 font-semibold">Web Developer</span>
            <FaUser />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
