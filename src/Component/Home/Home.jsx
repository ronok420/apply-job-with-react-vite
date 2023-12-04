import React, { createContext, useEffect, useState } from 'react';
import img from '../../assets/images/user.png';
import './Home.css'
import JobCatagories from '../JobCatagories/JobCatagories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
// export const JobdetailContext = createContext(null);

const Home = () => {
    const [catagory, setCatagory] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);
    const [jobinfo, setJobinfo] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, [])

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const handleJobDetails = jobinfo => {
        console.log(jobinfo);
        setJobinfo(jobinfo);

    }

    return (

     

            <section>

                <div className='home-div-info'>
                    <div className='home-div-text'>
                        <h1>One Step</h1>
                        
                        <h1>Closer To YOur</h1>
                        <h1>Dream Job</h1>
                        <p style={{ width: '50%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio dolore quos maxime reiciendis fugit iste, quisquam ratione quod sequi.</p>
                        <button>Get Started</button>
                    </div>
                    <div className='home-div-image'>
                        <img src={img} alt="" />
                    </div>

                </div>

                <div className='job-catagory-div'>
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>Job Catagory List</h1>
                    <p>Explore thousands of job opportunities with all the information you need it's your future</p>

                    <div className='logo-div-container'>
                        {
                            catagory.map(ct => <JobCatagories catagory={ct} key={ct.id}
                            ></JobCatagories>)
                        }


                    </div>

                </div>

                <div className="featured-job-div">
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>Featured Jobs</h1>
                    <p style={{ display: 'flex', justifyContent: 'center' }}>Explore thousands of job opportunities with all the information you need it's your future</p>


                    <div className="feature-job-container">
                        {showAllJobs ?
                            jobs.map(job => <FeaturedJobs
                                key={job.id} job={job} jobs={jobs} handleJobDetails={handleJobDetails}
                            ></FeaturedJobs>) :
                            jobs.slice(0, 4).map(job => (
                                <FeaturedJobs key={job.id} job={job} jobs={jobs} handleJobDetails={handleJobDetails}
                               
                                />
                            ))

                        }



                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={() => setShowAllJobs(!showAllJobs)} style={{ display: 'flex', width: '15%', justifyContent: 'center' }}> {showAllJobs ? 'See Limited Jobs' : 'Show All Jobs'}</button>

                    </div>

                </div>
            </section>

       



    );
};

export default Home;