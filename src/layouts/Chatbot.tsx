import React, { useState } from "react";
import { MessageSquare, Send, X } from "feather-icons-react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
          aria-label="Open chat support"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center bg-gray-100 p-4">
            <h3 className="text-lg font-semibold text-gray-800">Chat Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-600 hover:text-blue-800 transition duration-200"
              aria-label="Close chat support"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body (Placeholder for Messages) */}
          <div className="p-4 h-48 overflow-y-auto">
            {/* In a real implementation, this would display chat messages */}
            <p className="text-sm text-gray-500 italic">Start typing to chat...</p>
          </div>

          {/* Input Area */}
          <div className="flex items-center p-4 border-t border-gray-200">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 text-blue-600 hover:text-blue-800 transition duration-200"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;