import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-section' >
            <div className='nav-div text-div'>
            <h2>CareerHub</h2>

            </div>
            <div className='nav-div'>
            <Link to="/">home</Link>
            <Link to="/JobDetails">job</Link>
            <Link to="/applied">appliedJob</Link>
            <Link to="/statistics">statistics</Link>

            </div>
           <div className='nav-div'>
           <button>Apply Now</button>

           </div>

            
        </nav>
    );
};

export default Header;