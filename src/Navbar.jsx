import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='image'><img src="https://img.icons8.com/color/256/source-code.png" alt="demo" height="50"/></li>
        <li><a href="#">File</a></li>
        <li><a href="#">Edit</a></li>
        <li><a href="#">View</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <style jsx>{`
        nav {
          background-color: black;
          color: #fff;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          height:10vh;
          align-items:center;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }

        li {
          margin-right: 1rem;
        }

        a {
          color: #2196F3;
          text-decoration: none;
          padding: 0.5rem;
        }

        a:hover {
          background-color: #555;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
