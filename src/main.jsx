import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';

import AppliedJob from './Component/AppliedJob/AppliedJob.jsx';
import Statitstics from './Component/Statistics/Statitstics.jsx';
import JobDetails from './Component/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/JobDetails/:id",
        element: <JobDetails></JobDetails>,
        // loader: async ({ params }) => {
        //   const jobId = params.id;
        //   // Fetch job details using the jobId
        //   const response = await fetch('jobs.json');
        //   const jobDetails = await response.json();
         
        //   console.log(jobDetails);
        // }
        loader: ({params}) => fetch('jobs.json')
      },
      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/statistics",
        element: <Statitstics></Statitstics>
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

