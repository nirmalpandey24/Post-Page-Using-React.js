import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoFilterSharp } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">WDM</div>
      <div className="search">
        <div className="left">
          <CiSearch />
          <input type="text" placeholder="search here.." />
        </div>
        <div className="right">
          <IoFilterSharp />
          Filters
        </div>
      </div>
      <div className="seller">Become a seller</div>
    </div>
  );
};

export default Navbar;
