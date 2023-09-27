import React, { useState } from "react";
import PageParent from "./PageParent";
import ProjectList from "./ProjectList";

const Project = () => {
  const [data, setData] = useState([]);
  return (
    <PageParent title="- MY PROJECT -" id="project">
      {/* <Slide data={project} setData={setData} />
      <ProjectModal data={data} /> */}
      <ProjectList />
    </PageParent>
  );
};
export default Project;
