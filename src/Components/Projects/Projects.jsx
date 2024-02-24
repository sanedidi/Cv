import React from "react";
import "./Projects.scss";
import board from "../../assets/board.png";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects__wrapper">
          <div className="projects__top">
            <h2 className="projects__title">Projects</h2>
          </div>
          <div className="projects__content">
            <div className="projects__sides">
              <div className="projects__items">
                <div className="projects__item">
                    <div className="projects__item-img">
                      <img src={board} alt="" />
                    </div>
                    <div className="projects__item-text">
                      <p className="projects__text">Gaming WebSite</p>
                      <p className="projects__text bold">Board</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
