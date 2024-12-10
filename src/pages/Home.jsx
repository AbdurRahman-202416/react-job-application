import Hero from "../../src/assets/componenets/Hero";
import HomeCard from "../assets/componenets/HomeCard";
import Job from "../assets/componenets/Job";
import ViewAll from "../assets/componenets/ViewAll";
import JobList from "../assets/componenets/JobList";
import { useEffect } from "react";

const Home = () => {
  let subTitle =
    "Employers can post detailed job descriptions, required qualifications, and company information, giving potential candidates a clearunderstanding of the roles they are applying for. Whether you are starting your career or looking for your next big opportunity, JobHub makes job hunting simple, efficient, and accessible.";

  useEffect(() => {
    fetch(`/api/Jobs/7`)
      .then((res) => res.json())
      .then((job) => console.log({ job }));
  }, []);

  return (
    <>
      <Hero
        title="Your Gateway to Endless Career Opportunities"
        subtitle={subTitle}
      />
      <HomeCard />
      <JobList isHome={true} />
      <ViewAll />
    </>
  );
};

export default Home;
