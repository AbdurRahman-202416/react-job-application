import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./assets/layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFountPage from "./pages/NotFountPage";
import JobPageSingler, { jobLoader } from "./pages/JobPageSingler";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import Tset from "./assets/componenets/Test";
import { createContext, useContext, useState } from "react";
//post
export const love = createContext();

const App = () => {
  const addJob = async (newJob) => {
    console.log(newJob);
    const res = await fetch("/api/Jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return res.ok;
  };

  const [totalLove, setLove] = useState([]);

  //delete
  const deleteJob = async (id) => {
    console.log("delete", id);
    const res = await fetch(`/api/Jobs/${id}`, {
      method: "DELETE",
    });
    return res.ok;
  };
  // edit job / update job
  const updateJob = async (job) => {
    console.log(job, id);
    const res = await fetch(`/api/Jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPageSingler deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFountPage />} />
      </Route>
    ),
    {
      future: {
        scrollRestoration: "enabled",
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <love.Provider value={{totalLove,setLove}}>
      <RouterProvider router={router} />
    </love.Provider>
  );
};

export default App;
