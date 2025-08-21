import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="border rounded-2xl items-center">
      <p className="m-4">Find contacts by name</p>
      <input
        className="border border-gray-300 rounded-2xl px-2 mx-2 mb-4 hover:border-amber-500"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
