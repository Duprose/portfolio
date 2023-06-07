import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <h6 ><center>+1 year experience in video editing</center></h6>
      <h7><center>take a look on my channel DUPLEXKMATH </center> </h7>
      

      <div className="container experience__container">
        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;
