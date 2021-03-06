import React from "react";
import projects from "../data/projects";
import style from "./projects.module.css";

const Projects = ({ openModal }) => {
  const projectDisplay = projects.data.map((project) => {
    return (
      <section className={style.card} key={project._id}>
        <header>
          <h3>{project.name}</h3>
        </header>
        <article className={style.cardbody}>
          <div>
            <p>{project.summary}</p>
            <ul>
              {project.keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={project.img[0]} alt="" />
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => openModal(project)}
          >
            View Details
          </button>
        </article>
        <a href={project.appUrl} target="blank" className="btn blockbtn">
          Launch App
        </a>
      </section>
    );
  });
  return (
    <div id="portfolio">
      <div style={{ height: "3rem" }}></div>
      <div className="section-header">
        <div>
          <h3>Projects</h3>
        </div>
        <div className="section-divider"></div>
      </div>

      {projectDisplay}
    </div>
  );
};

export default Projects;
