import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ExperiencesSection = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Software Engineer",
      description: "Worked on various web development projects",
      date: "2020 - Present",
    },
    {
      id: 2,
      title: "Intern",
      description:
        "Interned at a tech company, gaining experience in software development",
      date: "2019 - 2020",
    },
    {
      id: 3,
      title: "MEST Trainee",
      description: "Studied web development at MEST",
      date: "2024",
    },
  ]);
  const [newExperienceTitle, setNewExperienceTitle] = useState("");
  const [newExperienceDescription, setNewExperienceDescription] = useState("");
  const [newExperienceDate, setNewExperienceDate] = useState("");

  const handleEdit = (id) => {
    // Handle edit action here
    console.log(`Editing experience with id: ${id}`);
  };

  const handleDelete = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  const handleAddExperience = () => {
    if (
      newExperienceTitle.trim() === "" ||
      newExperienceDescription.trim() === "" ||
      newExperienceDate.trim() === ""
    ) {
      return;
    }

    const newExperience = {
      id: experiences.length + 1,
      title: newExperienceTitle,
      description: newExperienceDescription,
      date: newExperienceDate,
    };

    setExperiences([...experiences, newExperience]);
    setNewExperienceTitle("");
    setNewExperienceDescription("");
    setNewExperienceDate("");
  };

  return (
    <section id="experiences" className="mt-8 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">My Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col items-start justify-between shadow hover:shadow-lg transition duration-300"
          >
            <div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "black", fontWeight: "bold" }}
              >
                {experience.title}
              </h3>
              <p className="text-sm text-gray-600">{experience.description}</p>
              <p className="text-sm text-gray-600">Date: {experience.date}</p>
            </div>
            <div className="mt-4 flex items-center">
              <button
                className="text-blue-500 mr-2 hover:text-blue-700"
                onClick={() => handleEdit(experience.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(experience.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        <div className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col items-start justify-between shadow hover:shadow-lg transition duration-300">
          <input
            type="text"
            placeholder="Title"
            value={newExperienceTitle}
            onChange={(e) => setNewExperienceTitle(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Description"
            value={newExperienceDescription}
            onChange={(e) => setNewExperienceDescription(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Date"
            value={newExperienceDate}
            onChange={(e) => setNewExperienceDate(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full"
          />
          <button
            onClick={handleAddExperience}
            className="bg-pink-600 text-white px-4 py-2 rounded"
          >
            Add New Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
