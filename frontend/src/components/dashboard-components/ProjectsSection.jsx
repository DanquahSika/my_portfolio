import  { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'https://via.placeholder.com/150',
      liveDemoUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'https://via.placeholder.com/150',
      liveDemoUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      imageUrl: 'https://via.placeholder.com/150',
      liveDemoUrl: 'https://example.com',
      repoUrl: 'https://github.com/example/project3',
    },
  ]);

  const [newProject, setNewProject] = useState({
    id: '',
    title: '',
    description: '',
    imageFile: null,
    liveDemoUrl: '',
    repoUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProject({ ...newProject, imageFile: e.target.files[0] });
  };

  const handleAddProject = () => {
    const updatedProjects = [...projects, { ...newProject, id: projects.length + 1 }];
    setProjects(updatedProjects);
    setNewProject({
      id: '',
      title: '',
      description: '',
      imageFile: null,
      liveDemoUrl: '',
      repoUrl: '',
    });
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log(`Editing skill with id: ${id}`);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <section id='projects' className="mt-8 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col items-start justify-between shadow hover:shadow-lg transition duration-300"
          >
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="mt-2">
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-lg" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <button
                className="text-blue-500 mr-2 hover:text-blue-700"
                onClick={() => handleEdit(project.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(project.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Add New Project</h3>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 mb-2 w-full"
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Live Demo URL"
          name="liveDemoUrl"
          value={newProject.liveDemoUrl}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Repository URL"
          name="repoUrl"
          value={newProject.repoUrl}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 mb-2 w-full"
        />
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded"
          onClick={handleAddProject}
        >
          Add New Project
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
