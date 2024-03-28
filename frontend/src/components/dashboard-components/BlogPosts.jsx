import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const BlogSection = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Blog Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      title: "Third Blog Post",
      content: "Integer eget odio sed ipsum finibus consequat.",
    },
  ]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handleEdit = (id) => {
    // Handle edit action here
    console.log(`Editing post with id: ${id}`);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleAddPost = () => {
    if (newPostTitle.trim() === "" || newPostContent.trim() === "") {
      return;
    }

    const newPost = {
      id: posts.length + 1,
      title: newPostTitle,
      content: newPostContent,
    };

    setPosts([...posts, newPost]);
    setNewPostTitle("");
    setNewPostContent("");
  };

  return (
    <section className="mt-8 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">My Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col items-start justify-between shadow hover:shadow-lg transition duration-300"
          >
            <div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "black", fontWeight: "bold" }}
              >
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.content}</p>
            </div>
            <div className="mt-4 flex items-center">
              <button
                className="text-blue-500 mr-2 hover:text-blue-700"
                onClick={() => handleEdit(post.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(post.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        <div
          id="blog"
          className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col items-start justify-between shadow hover:shadow-lg transition duration-300"
        >
          <input
            type="text"
            placeholder="Post Title"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full"
          />
          <textarea
            placeholder="Post Content"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            className="border border-gray-300 p-2 mb-2 w-full"
            rows="4"
          />
          <button
            onClick={handleAddPost}
            className="bg-pink-600 text-white px-4 py-2 rounded"
          >
            Add New Post
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
