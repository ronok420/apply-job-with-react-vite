import React from 'react';
import img from '../../assets/images/user.png';
import './Home.css'

const Home = () => {
    return (
        <section>
            <div className='home-div-info'>
                <div className='home-div-text'>
                    <h1>One Step</h1>
                    <h1>Closer To YOur</h1>
                    <h1>Dream Job</h1>
                    <p style={{width:'50%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio dolore quos maxime reiciendis fugit iste, quisquam ratione quod sequi.</p>
                    <button>Get Started</button>
                </div>
                <div className='home-div-image'>
                    <img src={img} alt="" />
                </div>

            </div>

            <div className='job-catagory-div'>
                <h1 style={{display:'flex',justifyContent:'center'}}>Job Catagory List</h1>
                <p>Eplore thousands of job opportunities with all the information you need it's your future</p>

                <div className='logo-div'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>

            </div>
        </section>
    );
};

export default Home;