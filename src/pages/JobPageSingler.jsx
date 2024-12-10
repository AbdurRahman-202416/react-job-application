// import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../assets/componenets/Spinner";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import Hero from "../assets/componenets/Hero";
import HomeCard from "../assets/componenets/HomeCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { data } from "autoprefixer";

const JobPageSingler = ({ deleteJob }) => {
  const navigate = useNavigate();
  const OnDeleteClick = (jobId) => {
    const confirm = window.confirm("Are You Sure You Want To Delete This Job?");
    if (!confirm) return;

    deleteJob(jobId);
    // toast.success('Job Delete SuccessFully ');
    toast.success("Job Delete SuccessFully ", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "my-custom-toast",
    });
    navigate("/jobs");
  };
  const job = useLoaderData();
  const { id } = useParams();
  // const [job, setJob] = useState();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   jobLoader()
  // },[])
  // const [job, setJob] = useState();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchJob = async () => {
  //     try {
  //       const res = await fetch(`/api/Jobs/${id}`);
  //       const data = await res.json();
  //       console.log(data);
  //       if (data) {
  //         setJob(data);
  //         //   setLoading(!loading);
  //       }
  //     } catch (error) {
  //       console.log("Error feching Data by single id ", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchJob();
  // }, [id]);

  return (
    <div>
      {/* <Hero/>
         <HomeCard/> */}
      <div>
        <section>
          <div className="container m-auto py-6 px-6 font-bold">
            <Link
              to="/Jobs"
              className="text-indigo-600 bg-indigo-50 hover:bg-indigo-900 hover:text-indigo-50 rounded-md px-4 py-2 inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-9-9 9-9"
                ></path>
              </svg>
              Back to Job List
            </Link>
          </div>
        </section>
        <section className="bg-indigo-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
              <main>
                <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                  <div className="text-gray-500 mb-4">
                    <i className="fa-solid fa-clock text-lg mr-2" /> {job.type}
                  </div>

                  <h1 className="text-3xl font-bold mb-4">
                    <i className="fa-solid fa-briefcase text-lg mr-4" />
                    {job.id} {job.title}
                  </h1>
                  <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2" />
                    <p className="text-orange-700">{job.location}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-indigo-800 text-lg font-bold mb-6">
                    Job Description
                  </h3>
                  <p className="mb-4">{job.description}</p>
                  <h3 className="text-indigo-800 text-lg font-bold mb-2">
                    Salary
                  </h3>
                  <p className="mb-4">{job.salary} / Year</p>
                </div>
              </main>

              <aside>
                <div className="bg-white p-6 rounded-lg  shadow-md">
                  <h3 className="text-xl font-bold mb-6">
                    <i className="fa-solid fa-chart-pie"></i> Company Info
                  </h3>
                  <h2 className="text-2xl">{job.company.name}</h2>
                  <p className="my-2 text-justify">{job.company.description}</p>
                  <hr className="my-4" />
                  <h3 className="text-xl">
                    <i className="fa-solid fa-envelope"></i> Contact Email:
                  </h3>
                  <p className="my-2 bg-indigo-100 p-2 overflow-x-scroll font-bold">
                    {job.company.contactEmail}
                  </p>
                  <h3 className="text-xl">
                    <i className="fa-solid fa-phone"></i> Contact Phone:
                  </h3>
                  <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {job.company.contactPhone}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                  <Link
                    to={`/edit-job/${job.id}`}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold shadow-lg py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    <i className="fa-solid fa-pen-to-square mr-4 "></i>
                    Edit Job
                  </Link>
                  <button
                    onClick={() => OnDeleteClick(job.id)}
                    className="bg-red-400 hover:bg-red-700 shadow-xl text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    <i className="fa-solid fa-trash-can mr-2 "></i> Delete Job
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const jobLoader = async ({ params }) => {
  const { id } = params;
  if (!id) {
    throw new Error("Job ID is missing.");
  }
  const res = await fetch(`/api/Jobs/${id}`);
  if (!res.ok) {
    throw new Error("Job not found.");
  }
  const data = await res.json();
  console.log(data);
  return data;
};

export { JobPageSingler as default, jobLoader };
