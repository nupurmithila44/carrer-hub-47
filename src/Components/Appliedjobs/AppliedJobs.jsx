import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredjobApplication } from "../../utility/localStorag";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedjob, setappliedjob] = useState([]);
    
    useEffect(() => {
        const storedjobIds = getstoredjobApplication();

        if (jobs.length > 0) {

            const jobApplied = [];
            for (const id of storedjobIds) {
                const job = jobs.find(job => job.id === id);

                if (job) {
                    jobApplied.push(job)
                }
            }
            setappliedjob(jobApplied);

        }


    }, [jobs])
    return (
        <div>
            <h2>this is Applied job: {appliedjob.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>all</a></li>
                    <li><a>Remote</a></li>
                    <li><a>onsite</a></li>
                </ul>
            </details>

            <ul >
                {
                    appliedjob.map(job => <li ><span className="mt-20">{job.job_title} {job.company_name}: {job.remote_or_onsite}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;