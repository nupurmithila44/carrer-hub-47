import { MdLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, ob_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex">
                    <button className="px-5 py-2 font-extrabold border rounded-sm border-purple-500 mr-4">Remote</button>
                    <button className="px-5 py-2 font-extrabold border rounded-sm border-purple-500 mr-4">Remote</button>
                </div>
                <div className="flex">
                    <h2 className="flex mr-5"><MdLocationOn className="text-2xl mr-3"></MdLocationOn>{location}</h2>
                    <h2 className="flex "><CiDollar className="text-2xl mr-3"></CiDollar>{salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/jobs/${id}`}>
                    <button className="btn btn-primary bg-purple-600 text-white">view details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;