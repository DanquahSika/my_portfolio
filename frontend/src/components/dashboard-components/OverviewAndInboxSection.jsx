import { useState } from 'react';

import { FaTrash, FaReply } from 'react-icons/fa';

const OverviewAndInboxSection = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Linda Quaye', message: 'Hello, how much is it for a website?' },
    { id: 2, sender: 'Cassandra Mensah', message: 'Please what is your delivery time?' },
    { id: 3, sender: 'Besiwah Fors', message: 'How is your payment plan' },
  ]);

  const handleDelete = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

 

  const handleReply = (id) => {
    
    console.log(`Replying to message with id: ${id}`);
  };

  return (
    <section id='messages' className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2">
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300">
  <h2 className="text-xl font-bold mb-4">Overview</h2>
  <div className="flex justify-between items-center mb-4">
    <div>
      <p className="text-lg font-semibold">Total Visitors</p>
      <p className="text-gray-600">1,234</p>
    </div>
    <div>
      <p className="text-lg font-semibold">Unique Visitors</p>
      <p className="text-gray-600">876</p>
    </div>
    <div>
      <p className="text-lg font-semibold">Page Views</p>
      <p className="text-gray-600">3,456</p>
    </div>
  </div>
  <div className="flex justify-between items-center mb-4">
    <div>
      <p className="text-lg font-semibold">Most Visited Page</p>
      <p className="text-gray-600">Portfolio Projects</p>
    </div>
    <div>
      <p className="text-lg font-semibold">Average Time on Site</p>
      <p className="text-gray-600">2 min 30 sec</p>
    </div>
    <div>
      <p className="text-lg font-semibold">Bounce Rate</p>
      <p className="text-gray-600">30%</p>
    </div>
  </div>
  <div>
    <p className="text-lg font-semibold">Top Referring Sites</p>
    <ul className="list-disc list-inside text-gray-600">
      <li>Google.com</li>
      <li>LinkedIn.com</li>
      <li>GitHub.com</li>
      <li>facebook.com</li>
    </ul>
    <p className="text-lg font-semibold">Top Counties</p>
    <ul className="list-disc list-inside text-gray-600">
      <li>Ghana</li>
      <li>Nigeria</li>
      <li>USA</li>
      <li>UK</li>
    </ul>
  </div>
</div>

      </div>
      <div className="col-span-1">
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-4">Messages</h2>
          <div className="grid grid-cols-1 gap-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="bg-white p-4 border border-gray-200 rounded-lg flex flex-col items-start justify-between shadow hover:shadow-lg transition duration-300"
              >
                <div>
                  <p className="text-lg font-semibold">{message.sender}</p>
                  <p className="text-sm text-gray-600">{message.message}</p>
                </div>
                <div className="mt-4 flex items-center">
                  
                  <button
                    className="text-red-500 mr-2 hover:text-red-700"
                    onClick={() => handleDelete(message.id)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleReply(message.id)}
                  >
                    <FaReply />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewAndInboxSection;
