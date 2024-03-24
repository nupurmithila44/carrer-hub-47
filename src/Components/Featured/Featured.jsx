import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured = () => {
    const [jobs, setjobs]=useState([]);
    const [dataLength, setdataLenth]=useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobs(data))
    },[])
    return (
        <div>
           <h1 className="text-2xl">Featured Jobs: {jobs.length}</h1> 
           <p className="text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="grid grid-cols-2 gap-4">
           {
            jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
           }
           </div>
           <div className={dataLength === jobs.length ? "hidden": " "}>
            <button onClick={() => setdataLenth(jobs.length)} className="btn btn-primary bg-purple-600 text-white">Show all jobs</button>
           </div>
        </div>
    );
};

export default Featured;