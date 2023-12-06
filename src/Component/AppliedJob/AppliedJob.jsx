import React, { useEffect, useState } from 'react';
import './AppliedJob.css'
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/localstorage';
import ShowJob from '../ShowJob/ShowJob';

const AppliedJob = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    const [appliedjob,setAppliedjob]=useState([]);
    useEffect(() =>{
        const getStoredid=getStoredJobApplication();
        // console.log(getStoredid);
       
     if(jobs.length >0){
        const idofStoredJob =[];
        for(const id of getStoredid){
          const job= Array.isArray(jobs) && jobs.find(job => job.id === id);
          if(job){
            idofStoredJob.push(job);

          }
        }
        setAppliedjob(idofStoredJob);
        console.log(appliedjob);
       





     }
    },[jobs])

    return (
        <div className='applied-job-container'>
            <h1 style={{display:"flex", justifyContent:"center", marginBottom:"100px"}}>Applied Job</h1>
            {
                
                appliedjob.map(jb => <ShowJob appliedjob={jb} key={jb.id}></ShowJob>)
            }
        </div>
    );
};

export default AppliedJob;