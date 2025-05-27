import React, { useState } from "react";
import { Plus, Search, ChevronDown } from "feather-icons-react";

interface HeaderProps {
  onCreateNewTicket?: () => void;
  onSearch?: (value: string) => void;
  onStatusChange?: (status: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCreateNewTicket, onSearch, onStatusChange }) => {
  const [status, setStatus] = useState("All");
  const [statusOpen, setStatusOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-center gap-3 w-full">
      {/* Create New Ticket Button - 25% */}
      <button
        onClick={onCreateNewTicket}
        className="w-1/4 flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-200"
      >
        <Plus size={16} />
        Create new ticket
      </button>

      {/* Search Input - 50% */}
      <div className="w-1/2 relative">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            onSearch?.(e.target.value);
          }}
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Status Dropdown - 25% */}
      <div className="w-1/4 relative">
        <button
          onClick={() => setStatusOpen(!statusOpen)}
          className="w-full flex items-center justify-between gap-2 py-2 px-3 rounded-md border font-medium bg-white text-gray-700 shadow-sm hover:bg-gray-50 transition-all text-sm"
        >
          <span>Status: {status}</span>
          <ChevronDown size={16} />
        </button>
        {statusOpen && (
          <div className="absolute right-0 w-40 p-2 shadow-md rounded-lg z-50 bg-white mt-1">
            {["All", "Pending", "Resolved"].map((option) => (
              <div
                key={option}
                className="py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setStatus(option);
                  setStatusOpen(false);
                  onStatusChange?.(option);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;