import React, { useState } from "react";
import "./Projects.scss";
import board from "../../assets/board.png";
import pr from '../../assets/pr.png'
import proflist from "../../assets/proflist.png";
import land from "../../assets/land.png";
import razer from "../../assets/razer.png";
import sneack from "../../assets/sneackers.png";
import taneeq from "../../assets/taneeq.png";
import fifa from "../../assets/fifa.png";
const Projects = () => {
  const [img, setImg] = useState("");

  return (
    <section className="projects">
      <div className="container">
        <div className="projects__wrapper">
          <div className="projects__top">
            <h2 className="projects__title">Projects</h2>
          </div>
          <div className="projects__content">
            <div className="projects__box">
                <div
                  className="projects__item board"
                  onClick={() => setImg(board)}
                >
                  <div className="projects__item-img">
                    <img src={board} alt="" />
                  </div>
                  <div className="projects__item-text">
                    <p className="projects__text">Gaming WebSite</p>
                    <p className="projects__text bold">Board</p>
                  </div>
                </div>
                <div
                  className="projects__item proflist"
                  onClick={() => setImg(proflist)}
                >
                  <div className="projects__item-img">
                    <img src={proflist} alt="" />
                  </div>
                  <div className="projects__item-text">
                    <p className="projects__text">Hardware Store</p>
                    <p className="projects__text bold">Proflist</p>
                  </div>
                </div>
                <div
                  className="projects__item land"
                  onClick={() => setImg(land)}
                >
                  <div className="projects__item-img">
                    <img src={land} alt="" />
                  </div>
                  <div className="projects__item-text">
                    <p className="projects__text">Landing WebSite</p>
                    <p className="projects__text bold">FxPro</p>
                  </div>
                </div>
                <div
                  className="projects__item sneack"
                  onClick={() => setImg(sneack)}
                >
                  <div className="projects__item-img">
                    <img src={sneack} alt="" />
                  </div>
                  <div className="projects__item-text">
                    <p className="projects__text">Sneackers Online Store</p>
                    <p className="projects__text bold">Sneacker District</p>
                  </div>
                </div>
                <div
                  className="projects__item razer"
                  onClick={() => setImg(razer)}
                >
                  <div className="projects__item-img">
                    <img src={razer} alt="" />
                  </div>
                  <div className="projects__item-text">
                    <p className="projects__text">Gaming Online Shop</p>
                    <p className="projects__text bold">Razer</p>
                  </div>
                </div>
                <div
                  className="projects__item taneeq"
                  onClick={() => setImg(taneeq)}
                >
                  <div className="projects__item-img">
                    <img src={taneeq} alt="" />
                  </div>
                  <div className="projects__item-text">
                    <p className="projects__text"> Marketing Website</p>
                    <p className="projects__text bold">Taneeq</p>
                  </div>
                </div>
                <div
                  className="projects__item fifa"
                  onClick={() => setImg(fifa)}
                >
                  <div className="projects__item-img">
                    <img src={fifa} alt="" />
                  </div>
                  <div className="projects__item-text">
                    <p className="projects__text">Landing WebSite</p>
                    <p className="projects__text bold">Panda</p>
                  </div>
                </div>
            </div>
            {img ? (
              <div className="projects__sides glob">
                <img src={img} alt="" />
              </div>
            ):(
                <div className="projects__sides default">
                    <img src={pr} alt="" />
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
