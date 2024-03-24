import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorag";


const JobDetails = () => {
    const jobs = useLoaderData();
   const {id}=useParams()
 const idInt = parseInt(id);
 console.log(idInt)
 const job = jobs.find (job => job.id == idInt)
const {job_description, educational_requirements,experiences,salary,job_title,phone} = job;
const handleClick = ()=>{
    saveJobApplication(idInt)
    toast("Wow so easy !");
}
    return (
        <div>
            <h1>job details: </h1>
            <div className="grid gap-5 md:grid-cols-4">
                <div className="border md:col-span-3 space-y-4">
                <p> job Discription: {job_description}</p>
                <p>educational_requirements: {educational_requirements}</p>
                <p>experiences: {experiences}</p>
                </div>
                <div className="border">
                  <h3>job Detailes</h3>
                  <p>Salary:{salary}</p>
                  <p>{job_title}</p>
                  <p>{phone}</p>
                
                  <button onClick={handleClick} className="btn btn-primary w-full">Apply Now</button>
                  <ToastContainer></ToastContainer>
                </div>

            </div>
            
        </div>
    );
};

export default JobDetails;