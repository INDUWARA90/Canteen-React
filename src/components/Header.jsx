import React from 'react';

function Header({ searchTerm, setSearchTerm }) {
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-5 mx-6 mb-8'>
      <div>
        <h3 className='text-2xl font-bold text-gray-600'>
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className='text-2xl font-bold'>FOT Canteen</h1>
      </div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[50vh]"
        />
      </div>
    </nav>
  );
}

export default Header;
