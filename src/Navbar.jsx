import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='image'><img src="src/assets/icons8-code-64.png" alt="demo" height="50"/></li>
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
          color: #B23AF6;
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
