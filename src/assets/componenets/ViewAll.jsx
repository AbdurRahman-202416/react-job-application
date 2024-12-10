import React from "react";
import { Link } from "react-router-dom";

const ViewAll = () => {
  return (
    <div>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to='/Jobs'
          className="block bg-gray-800 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
        
          <i className="fa-solid fa-eye mr-2" />
          View All Jobs
        </Link>
      </section>
    </div>
  );
};

export default ViewAll;
