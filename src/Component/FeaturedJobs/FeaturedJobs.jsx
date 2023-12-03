import React from 'react';
import './FeaturedJobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation,faDollarSign } from '@fortawesome/free-solid-svg-icons'


import google from '../../assets/logo/google.png';
import netflix from '../../assets/logo/netflix.png';
import tesla from '../../assets/logo/tesla.png';

const logos = {
    'google.png': google,
    'netflix.png': netflix,
    'tesla.png': tesla,

};



const FeaturedJobs = ({ job,jobs }) => {
    const { job_title, logo, company_name, job_type, remote_or_onsite, location, salary } = job;
    console.log(jobs.length);
    return (
        <div className='single-featured-div'>
            <div className='inside-div-job-info'>
                <img src={logos[logo]} alt="" />
                <h3>{job_title}</h3>
                <p>{company_name}</p>

                <div style={{ display: 'flex' }}>
                    <a style={{marginRight:'10px', border:'1px solid lightblue',padding:"0px 10px 0px 10px",lineHeight:'1'}} href=""><p>{job_type}</p></a>
                    <a style={{marginRight:'10px', border:'1px solid lightblue',padding:"0px 10px 0px 10px",lineHeight:'1'}} href=""><p>{remote_or_onsite}</p></a>

                </div>
                <div style={{ display: 'flex' }}>
                    <p style={{marginRight:'17px'}}><FontAwesomeIcon icon={faLocation} />{location}</p>
                    <p><FontAwesomeIcon icon={faDollarSign} />Salary:{salary}</p>
                </div>
                <button>View Details</button>

            </div>

          


        </div>
    );
};

export default FeaturedJobs;