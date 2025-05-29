import React, { useState, useEffect } from "react";
import { PageBreadcrumb } from "../../components";

interface Conversation {
  id: number;
  name: string;
  unread: boolean;
  lastMessage: string;
  time: string;
}

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
}

const MessagesOverview: React.FC = () => {
  const [filter, setFilter] = useState("All"); // Default to "All"
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [filteredConversations, setFilteredConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data (replace with API calls in the future)
  const mockConversations: Conversation[] = [
    { id: 1, name: "Winfred Orton", unread: true, lastMessage: "How are you?", time: "10:57 PM" },
    { id: 2, name: "Alice Lebeau", unread: false, lastMessage: "Looking forward to it...", time: "10:50 PM" },
    { id: 3, name: "Looking Forward to you...", unread: true, lastMessage: "Hi, how are you?", time: "10:45 PM" },
  ];

  const mockMessages: Message[] = [
    { id: 1, sender: "Winfred Orton", text: "How are you?", time: "10:55 PM" },
    { id: 2, sender: "You", text: "Hi, Winfred! Looking forward to it.", time: "10:56 PM" },
  ];

  // Fetch conversations (mock for now, replace with API)
  const fetchConversations = async () => {
    // Future: Replace with API call (e.g., axios.get("/api/conversations"))
    return mockConversations;
  };

  // Fetch messages for a conversation (mock for now, replace with API)
  const fetchMessages = async (conversationId: number) => {
    // Future: Replace with API call (e.g., axios.get(`/api/messages/${conversationId}`))
    return mockMessages;
  };

  // Send a message (mock for now, replace with API)
  const sendMessage = async (conversationId: number, text: string) => {
    // Future: Replace with API call (e.g., axios.post(`/api/messages`, { conversationId, text }))
    const newMsg: Message = {
      id: messages.length + 1,
      sender: "You",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMsg]);
  };

  // Load conversations on mount
  useEffect(() => {
    fetchConversations().then((data) => {
      setConversations(data);
      setFilteredConversations(data);
    });
  }, []);

  const handleFilterChange = (filterType: string) => {
    setFilter(filterType);
    // Future: Add API filtering (e.g., pass filter as query param)
    fetchConversations().then((data) => {
      let updatedConversations = data;
      if (filterType === "Unread") {
        updatedConversations = data.filter((conv) => conv.unread);
      } else if (filterType === "Archived") {
        updatedConversations = data.filter((conv) => !conv.unread); // Mock logic for archived
      } else if (filterType === "All") {
        updatedConversations = data; // Show all conversations
      }
      if (searchQuery) {
        updatedConversations = updatedConversations.filter((conv) =>
          conv.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      setFilteredConversations(updatedConversations);
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = conversations.filter((conv) =>
      conv.name.toLowerCase().includes(query.toLowerCase())
    );
    if (filter === "Unread") {
      setFilteredConversations(filtered.filter((conv) => conv.unread));
    } else if (filter === "Archived") {
      setFilteredConversations(filtered.filter((conv) => !conv.unread));
    } else {
      setFilteredConversations(filtered);
    }
  };

  const handleConversationSelect = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    fetchMessages(conversation.id).then((data) => setMessages(data));
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      sendMessage(selectedConversation.id, newMessage);
      setNewMessage("");
    }
  };

  return (
    <>
      <PageBreadcrumb
        title="Messages"
        name="Messages"
        breadCrumbItems={["Emirates", "Menu", "Messages"]}
      />
      <div className="w-full min-h-screen p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Messages</h1>
        <div className="flex h-[calc(100vh-180px)]">
          {/* Conversation List - Left Panel */}
          <div className="w-1/3 bg-white shadow-md rounded-lg mr-6 overflow-y-auto">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="p-4 border-b border-gray-200 flex space-x-2">
              <button
                onClick={() => handleFilterChange("All")}
                className={`flex-1 px-3 py-1 rounded-l-md text-sm font-medium ${
                  filter === "All" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleFilterChange("Unread")}
                className={`flex-1 px-3 py-1 text-sm font-medium ${
                  filter === "Unread" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Unread
              </button>
              <button
                onClick={() => handleFilterChange("Archived")}
                className={`flex-1 px-3 py-1 rounded-r-md text-sm font-medium ${
                  filter === "Archived" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Archived
              </button>
            </div>

            {/* Recent Messages Heading */}
            <div className="px-4 py-2">
              <h3 className="text-sm font-semibold text-gray-600">Recent Messages</h3>
            </div>

            {/* Conversation List */}
            <ul className="p-2">
              {filteredConversations.map((conv) => (
                <li
                  key={conv.id}
                  onClick={() => handleConversationSelect(conv)}
                  className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 ${
                    conv.unread ? "bg-blue-50" : ""
                  } ${selectedConversation?.id === conv.id ? "bg-gray-100" : ""}`}
                >
                  <img
                    src="/src/assets/images/image-removebg-preview.png" // Replace with actual avatar URL from backend
                    alt={conv.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{conv.name}</div>
                    <div className="text-sm text-gray-500 truncate">{conv.lastMessage}</div>
                  </div>
                  <div className="text-xs text-gray-400">{conv.time}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Area - Right Panel */}
          <div className="w-2/3 bg-white shadow-md rounded-lg p-4 flex flex-col">
            {selectedConversation ? (
              <>
                <div className="font-semibold text-gray-800 mb-4">
                  {selectedConversation.name}
                </div>
                <div className="flex-1 overflow-y-auto mb-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`mb-2 ${msg.sender === "You" ? "text-right" : "text-left"}`}
                    >
                      <div
                        className={`inline-block p-2 rounded-lg ${
                          msg.sender === "You"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <div className="text-xs text-gray-500">{msg.time}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a conversation to start chatting
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesOverview;