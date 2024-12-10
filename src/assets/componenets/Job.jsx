import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { love } from "../../App";

const Job = ({ job }) => {
  const [color, setColor] = useState("text-gray-900");
  const value = useContext(love);
  const addLove = (id) => {
    let newvalue = id;
    let list = [...value.totalLove];
    console.log(list);
    const isAlradyLove = list.includes(id);
    if (isAlradyLove) {
      list = list.filter((item) => item !== id);
      setColor("text-gray-900");
    } else {
      list.push(id);
      setColor("text-pink-600");
    }
    value.setLove(list);
  };
  useEffect(() => {
    let list = value.totalLove;
    const isAdded = list.find((item) => {
      if (item == job.id) {
        return true;
      } else {
        return false;
      }
    });

    if (isAdded) {
      setColor("text-pink-600");
    } else {
      setColor("text-gray-00");
    }
  }, []);
  console.log(color);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = showFullDescription
    ? job.description
    : `${job.description.substring(0, 90)}...`;

  return (
    <div className="p-4 bg-white rounded-xl  shadow-md">
      <div className="mb-6">
        <div className="text-gray-600 my-2">
          <i className="fa-solid fa-clock text-lg mr-2" /> {job.type}
        </div>
        <h3 className="text-xl font-bold">
          <i className="fa-solid fa-briefcase text-lg mr-2" />
          {job.id} {job.title}
        </h3>
      </div>

      <div className="mb-5">{description}</div>

      <button
        onClick={() => setShowFullDescription((prev) => !prev)}
        className="text-indigo-400 mb-5 hover:text-indigo-600"
      >
        {showFullDescription ? "Less" : "More"}
      </button>

      <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
      <div className="border border-gray-100 mb-5" />

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
          <i className="fa-solid fa-location-dot text-lg" /> {job.location}
        </div>
        <div className="Heard">
          <i
            onClick={() => {
              addLove(job.id);
            }}
            className={`fa-solid  ${color} fa-heart text-2xl m-2`}
          ></i>
        </div>

        <Link
          to={`/jobs/${job.id}`}
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Job;
