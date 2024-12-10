import React from 'react'
import Job from '../assets/componenets/Job'
import JobList from '../assets/componenets/JobList'
import { useNavigate } from 'react-router-dom'


const JobsPage = ( {deleteJob}) => {
  const navigate= useNavigate();
  const OnDeleteClick=(jobId)=>{
    const confirm = window.confirm('Are You Sure You Want To Delete This Job?');
    if(!confirm) return;

    deleteJob(jobId)
    navigate('/jobs')
  }
  return (
    <section className='bg-blue-50 px-4 py-6'>
     <JobList/>
  
    </section>
  )
}

export default JobsPage
