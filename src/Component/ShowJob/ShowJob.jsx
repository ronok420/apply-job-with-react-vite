import React from 'react';
import './ShowJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import google from '../../assets/logo/google.png';
import netflix from '../../assets/logo/netflix.png';
import tesla from '../../assets/logo/tesla.png';
import { Link } from 'react-router-dom';

const logos = {
    'google.png': google,
    'netflix.png': netflix,
    'tesla.png': tesla,

};


const ShowJob = ({ appliedjob }) => {
    const { job_title, logo, company_name, job_type, remote_or_onsite, location, salary } = appliedjob;
    // console.log(appliedjob);
    return (


        <div className='showjob-container'>

            <div className='showjob-log'><img style={{ width: "50%", margin: "45% 20% " }} src={logos[logo]} alt="" /></div>



            <div className='inside-div-job-info2'>

                <h3>{job_title}</h3>
                <p>{company_name}</p>

                <div style={{ display: 'flex' }}>
        <a style={{ margin: '0 10px 0 0', border: '1px solid lightblue', padding: "0px 10px 0px 10px", lineHeight: '1' }} href=""><p>{job_type}</p></a>
        <a style={{ marginRight: '10px', border: '1px solid lightblue', padding: "0px 10px 0px 10px", lineHeight: '1' }} href=""><p>{remote_or_onsite}</p></a>

    </div>
    <div style={{ display: 'flex' }}>
        <p style={{ marginRight: '17px' }}><FontAwesomeIcon icon={faLocation} />{location}</p>
        <p><FontAwesomeIcon icon={faDollarSign} />Salary:{salary}</p>
    </div>
   



            </div>


            <div style={{ marginLeft: "20%", marginTop: "8%" }}><button>View Details</button></div>


        </div>




    );
};

export default ShowJob;