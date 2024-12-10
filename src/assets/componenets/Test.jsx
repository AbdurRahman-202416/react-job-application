import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { jobLoader } from '../../pages/JobPageSingler';


const Tset = () => {
  const job=useLoaderData()
  console.log(job)
  return (
    <div>
        
      
    </div>
  )
}

export default Tset;
