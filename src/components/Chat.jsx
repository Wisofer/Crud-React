import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { sender: 'User', text: inputText }]);
      setInputText('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Chat App</h1>
      <div className="border border-gray-300 p-4 h-64 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="flex-grow border border-gray-300 p-2 mr-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
