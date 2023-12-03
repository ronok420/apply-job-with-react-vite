import React from 'react';
import './JobCatagories.css'


import accountLogo from '../../assets/icons/accounts.png';
import calendarLogo from '../../assets/icons/creative.png';
import chipLogo from '../../assets/icons/marketing.png';
import creativeLogo from '../../assets/icons/chip.png';


const logos = {
    'accounts-1.png': accountLogo,
    'design.png': calendarLogo,
    'marketing.png': chipLogo,
    'engineering.png': creativeLogo,
  };

const JobCatagories = ({catagory}) => {
    const {category_name,availability,logo}=catagory;
    // console.log(catagory);
    return (
        <div className='single-logo-div'>
            <div style={{margin:'20px 0 20px 20px'}}>
                
                <img src={logos[logo]} alt={category_name} />
                <h4>{category_name}</h4>
                <h6>{availability}</h6>
            </div>
           
          

        </div>
    );
};

export default JobCatagories;