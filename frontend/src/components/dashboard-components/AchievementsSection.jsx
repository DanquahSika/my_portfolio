import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Certificate in Web Development",
      description: "Completed a course in web development from ABC Institute.",
      date: "2022-01-01",
    },
    {
      id: 2,
      title: "First Place in Coding Competition",
      description: "Won first place in a national coding competition.",
      date: "2021-05-15",
    },
  ]);

  const [newAchievement, setNewAchievement] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAchievement({ ...newAchievement, [name]: value });
  };

  const handleAddAchievement = () => {
    const updatedAchievements = [
      ...achievements,
      { ...newAchievement, id: achievements.length + 1 },
    ];
    setAchievements(updatedAchievements);
    setNewAchievement({
      id: "",
      title: "",
      description: "",
      date: "",
    });
  };

  const handleEdit = (id) => {
    console.log(`Editing achievement with id: ${id}`);
  };

  const handleDelete = (id) => {
    setAchievements(
      achievements.filter((achievement) => achievement.id !== id)
    );
  };

  return (
    <section id="achievements" className="mt-8 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">My Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col items-start justify-between shadow hover:shadow-lg transition duration-300"
          >
            <div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "black", fontWeight: "bold" }}
              >
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
              <p className="text-sm text-gray-500">{achievement.date}</p>
            </div>
            <div className="mt-4 flex items-center">
              <button
                className="text-blue-500 mr-2 hover:text-blue-700"
                onClick={() => handleEdit(achievement.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(achievement.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Add New Achievement</h3>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newAchievement.title}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newAchievement.description}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 mb-2 w-full"
        ></textarea>
        <input
          type="date"
          placeholder="Date"
          name="date"
          value={newAchievement.date}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded"
          onClick={handleAddAchievement}
        >
          Add New Achievement
        </button>
      </div>
    </section>
  );
};

export default AchievementsSection;
