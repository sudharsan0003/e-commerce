// import React from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { HiOutlineShoppingCart } from 'react-icons/hi';

// const Navbar = () => {
//   return (
//     <>
//       <div className='nav-container'>
//         <div className='navbar'>
//           <Link to={'/'}>
//             <div className='nav-title'>
//               <img
//                 width='38'
//                 height='38'
//                 src='https://img.icons8.com/pulsar-line/48/home-page.png'
//                 alt='home-page'
//               />
//               <div className='nav-names'>
//                 <span className='firstname'>E-</span>
//                 <span className='lastname'>Store</span>
//               </div>
//             </div>
//           </Link>
//           <div className='nav-end'>
//             <div className='nav-search-container'>
//               <input
//                 type='text'
//                 placeholder='Search Products'
//                 className='nav-searchbox'
//               />
//               <button className='nav-searchbtn'>
//                 <FaSearch />
//               </button>
//               <div />

//               <button className='nav-login'>Login</button>
//               <div className='nav-cart'>
//                 <div className='cart-icon'>
//                   <HiOutlineShoppingCart />
//                 </div>
//                 <Link to={'/cart'} className='cart'>
//                   Cart
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Navbar;

import React, { Fragment } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar-container'>
        <div className='nav-left'>
          <Link to={'/'} className='main-title'>
            <div className='title-logo'>
              <img
                width='38'
                height='38'
                src='https://img.icons8.com/pulsar-line/48/home-page.png'
                alt='home-page'
              />
            </div>
            <div className='title-name'>
              <span className='firstname'>E-</span>
              <span className='lastname'>STORE</span>
            </div>
          </Link>
        </div>
        <div className='nav-right'>
          <div className='search-container'>
            <input
              type='text'
              placeholder='Search Products and more'
              className='input'
            />
            <div className='nav-searchbtn'>
              <button className='search-btn'>
                <FaSearch />
              </button>
              <div />
            </div>
          </div>
          <div className='loginbtn'>
            <button className='login-btn'>Login</button>
          </div>
          <div className='cart'>
            <Link to={'/cart'} className='cart'>
              <HiOutlineShoppingCart className='cart-icon' />
              Cart
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
