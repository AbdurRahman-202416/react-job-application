import React from "react";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div>
      <footer className="bg-gray-700 text-gray-50 text-1xl py-4 font-bold">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Shanto . All Rights Reserved.</p>
          <Link
            to="https://www.google.com/policies/privacy/archive/20010104-20040701/#:~:text=Information%20sharing,IP%20address%20with%20each%20query."
            className="hover:underline  hover:text-indigo-600"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default footer;
