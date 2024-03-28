
import { TEChart } from 'tw-elements-react';
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
          <ChartPie />
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

const ChartPie = () => {
  return (
    <div style={{ width: '380px', height: '380px' }}>
    <TEChart
      type="pie"
      data={{
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday ',
        ],
        datasets: [
          {
            label: 'Traffic',
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            backgroundColor: [
              'rgba(63, 81, 181, 0.5)',
              'rgba(77, 182, 172, 0.5)',
              'rgba(66, 133, 244, 0.5)',
              'rgba(156, 39, 176, 0.5)',
              'rgba(233, 30, 99, 0.5)',
              'rgba(66, 73, 244, 0.4)',
              'rgba(66, 133, 244, 0.2)',
              
            ],
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Website Traffic',
            font: {
              size: 16,
              weight: 'bold',
            },
          },
          subtitle: {
            display: true,
            text: 'Weekly traffic overview',
            font: {
              size: 14,
            },
          },
        },
        responsive: true,
      }}
      
    />
    </div>
  );
};

export default OverviewAndInboxSection;
