import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const JobDetails = () => {
   const job=useLoaderData();
   const { id } = useParams();
   console.log(id);
   console.log(job);
//    const parsedId = parseInt(id, 10);

    // const exist = job.find(jb => jb.id === parsedId );
    const exist = Array.isArray(job) && job.find(jb => jb.id === parseInt(id));
    console.log(exist);
    return (
        <div>
            <h2>Job Details:{exist.job_title}</h2>
            <h2>job description:{exist.job_description}</h2>
           
        
        </div>
    );
};

export default JobDetails;