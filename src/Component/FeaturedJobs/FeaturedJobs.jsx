import React from 'react';
import './FeaturedJobs.css'


import google from '../../assets/logo/google.png';
import netflix from '../../assets/logo/netflix.png';
import tesla from '../../assets/logo/tesla.png';

const logos = {
    'google.png':google,
    'netflix.png': netflix,
    'tesla.png': tesla,
  
  };



const FeaturedJobs = ({job}) => {
    const {job_title,logo,company_name,job_type,remote_or_onsite,location,salary} = job;
    return (
        <div className='single-featured-div'>
           <img src={logos[logo]} alt="" />
           <h3>{job_title}</h3>
           <p>{company_name}</p>

           <div style={{display:'flex'}}>
            <p>{job_type}</p>
            <p>{remote_or_onsite}</p>    
           </div>
           <div>
           <p>{location}</p>
            <p>{salary}</p>
           </div>
           <button>View Details</button>
        </div>
    );
};

export default FeaturedJobs;