import React from "react";
import { FiUser, FiPhone } from "react-icons/fi";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md flex items-center justify-between gap-4 w-[250px] h-[110px] bg-white/5 backdrop-blur-sm
">
      <div>
        <p className="flex items-center gap-1">
          <FiUser />
          {name}
        </p>
        <p className="flex items-center gap-1 text-sm text-gray-600">
          <FiPhone />
          {number}
        </p>
      </div>

      <button
        className="border rounded-2xl px-3 py-1 cursor-pointer hover:border-amber-500 hover:bg-amber-50 hover:text-amber-500 transition"
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
