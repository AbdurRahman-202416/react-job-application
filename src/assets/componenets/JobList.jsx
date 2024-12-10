import React, { useState, useEffect } from "react";
import Job from "./Job";
import Spinner from "./Spinner";

const JobList = ({ isHome = false }) => {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl= isHome ? '/api/Jobs?_limit=3':'/api/Jobs'
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        setJobList(data);
      } catch (error) {
        console.log("Error Fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse All Jobs"}
            <hr />
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
              {jobList.map((job) => (
                <Job key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobList;
