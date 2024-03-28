import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const SkillsSection = () => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "HTML",
      description: "HyperText Markup Language",
      proficiency: "Beginner",
    },
    {
      id: 2,
      name: "CSS",
      description: "Cascading Style Sheets",
      proficiency: "Intermediate",
    },
    {
      id: 3,
      name: "JavaScript",
      description: "JavaScript programming language",
      proficiency: "Advanced",
    },
  ]);
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillDescription, setNewSkillDescription] = useState("");
  const [newSkillProficiency, setNewSkillProficiency] = useState("Beginner");

  const handleEdit = (id) => {
    // Handle edit action here
    console.log(`Editing skill with id: ${id}`);
  };

  const handleDelete = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const handleAddSkill = () => {
    if (
      newSkillName.trim() === "" ||
      newSkillDescription.trim() === "" ||
      newSkillProficiency.trim() === ""
    ) {
      return;
    }

    const newSkill = {
      id: skills.length + 1,
      name: newSkillName,
      description: newSkillDescription,
      proficiency: newSkillProficiency,
    };

    setSkills([...skills, newSkill]);
    setNewSkillName("");
    setNewSkillDescription("");
    setNewSkillProficiency("Beginner");
  };

  return (
    <section id="skills" className="mt-8 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col items-start justify-between shadow hover:shadow-lg transition duration-300"
          >
            <div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "black", fontWeight: "bold" }}
              >
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600">{skill.description}</p>
              <p className="text-sm text-gray-600">
                Proficiency: {skill.proficiency}
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <button
                className="text-blue-500 mr-2 hover:text-blue-700"
                onClick={() => handleEdit(skill.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(skill.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        <div className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col items-start justify-between shadow hover:shadow-lg transition duration-300">
          <input
            type="text"
            placeholder="Skill Name"
            value={newSkillName}
            onChange={(e) => setNewSkillName(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Skill Description"
            value={newSkillDescription}
            onChange={(e) => setNewSkillDescription(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full"
          />
          <select
            value={newSkillProficiency}
            onChange={(e) => setNewSkillProficiency(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button
            onClick={handleAddSkill}
            className="bg-pink-600 text-white px-4 py-2 rounded"
          >
            Add New Skill
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
