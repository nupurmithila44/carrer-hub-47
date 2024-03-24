const getstoredjobApplication = ()=>{
    const storejobApplication = localStorage.getItem('job-Applications');
    if(storejobApplication){
        return JSON.parse(storejobApplication);
    }
    return [];
}

const saveJobApplication = id =>{
  const storejobAplications = getstoredjobApplication();
  const exists = storejobAplications.find(jobId => jobId === id);
  if (!exists){
    storejobAplications.push(id);
    localStorage.setItem('job-Applications', JSON.stringify(storejobAplications))
  }
}

export {getstoredjobApplication, saveJobApplication}