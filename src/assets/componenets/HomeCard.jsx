// import React from "react";

import { Link } from "react-router-dom";
import Card from "./Card";
const HomeCard = () => {
  return (
    <div>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">For Developers</h2>
                <p className="mt-2 mb-4">
                  Browse our React jobs and start your career today
                </p>
                <Link
                  to="/Jobs"
                  className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                ><i className="fa-solid fa-search text-white mr-2" /> 
                  Browse Jobs
                </Link>
              </div>
            </Card>
            <Card bg='bg-indigo-100'>
              <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">For Employers</h2>
                <p className="mt-2 mb-4">
                  List your job to find the perfect developer for the role
                </p>
                <Link
                  to="/add-job"
                  className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                > <i className="fa-solid fa-plus m-2" />
                
                  Add Job
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCard;