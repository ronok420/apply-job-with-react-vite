import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import img from '../../assets/images/bg1.png'
import './JobDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faDollarSign ,faPhone,faVoicemail,faBuilding} from '@fortawesome/free-solid-svg-icons'


const JobDetails = () => {
    const job = useLoaderData();
    const { id } = useParams();
    console.log(id);
    console.log(job);
    //    const parsedId = parseInt(id, 10);

    // const exist = job.find(jb => jb.id === parsedId );
    const exist = Array.isArray(job) && job.find(jb => jb.id === parseInt(id));
    console.log(exist);
    return (

        <section style={{ margin: '0 7% 0 7%' }}>
            <div>
                <div className='banner-div'>
                    <img src={img} alt="" />
                    <h1 style={{ display: 'flex', marginLeft: '23%', textAlign: 'center' }}>Job Details</h1>

                </div>

                <div className="job-container">
                    <div className="job-details-info">

                        <p>
                            <span style={{ fontWeight: 'bold' }}>job description:</span>
                            {exist.job_description}
                        </p>
                        <p><span style={{ fontWeight: 'bold' }}> Job Resposibility:</span>
                            {exist.job_responsibility}</p>
                        <p> <span style={{ fontWeight: 'bold' }}>Educational Requirements:</span>
                            {exist.educational_requirements}</p>
                        <p><span style={{ fontWeight: 'bold' }}> Experiences::</span>
                            {exist.experiences}</p>

                    </div>

                    <div className="job-details-cart2">
                        <div className="job-details-cart">
                            <div className='inner-job-details-cart-info'>
                                <h4>Job Details</h4>
                                <div style={{ border: '1px solid black' }}></div>
                                <p><span style={{ fontWeight: 'bold' }}><FontAwesomeIcon icon={faDollarSign} /> salary:</span>
                                    {exist.salary}</p>
                                <p><span style={{ fontWeight: 'bold' }}><FontAwesomeIcon icon={faBuilding} /> job title:</span>
                                    {exist.job_title}</p>
                                <h4>Contact Information</h4>
                                <div style={{ border: '1px solid black' }}></div>
                                <p><span style={{ fontWeight: 'bold' }}><FontAwesomeIcon icon={faPhone} /> Phone:</span>
                                    {exist.contact_information.phone}</p>
                                <p><span style={{ fontWeight: 'bold' }}><FontAwesomeIcon icon={faVoicemail} />email:</span>
                                    {exist.contact_information.email}</p>
                                <p><span style={{ fontWeight: 'bold' }}><FontAwesomeIcon icon={faLocation} />Adress:</span>
                                    {exist.contact_information.address}</p>
                            </div>
                            
                        </div>



                        <button style={{marginTop:'20px',width:'100%'}}>Apply Now</button>

                    </div>



                </div>







            </div>

        </section>


    );
};

export default JobDetails;