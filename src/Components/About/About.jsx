import React from "react";
import "./About.scss";
import gitHub from "../../assets/github.png";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";


const About = () => {
  <Accordion slotProps={{ transition: { unmountOnExit: true } }} />;
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__title">
            <svg
              viewBox="0 0 865 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4072 121H0.383832L41.5595 1.72443H74.0575L115.175 121H88.1515L58.2744 28.9808H57.3426L27.4072 121ZM25.7182 74.1168H89.5493V93.8019H25.7182V74.1168ZM129.531 121V1.72443H177.288C186.063 1.72443 193.382 3.02512 199.244 5.62651C205.107 8.2279 209.514 11.8388 212.465 16.4592C215.416 21.0407 216.891 26.3211 216.891 32.3004C216.891 36.9596 215.959 41.0559 214.096 44.5891C212.232 48.0835 209.669 50.9567 206.408 53.2086C203.185 55.4217 199.497 56.9942 195.342 57.9261V59.0909C199.885 59.285 204.137 60.5663 208.097 62.9347C212.096 65.3031 215.338 68.6228 217.823 72.8937C220.308 77.1258 221.55 82.1733 221.55 88.0361C221.55 94.3649 219.978 100.014 216.833 104.984C213.727 109.915 209.126 113.817 203.03 116.69C196.934 119.563 189.421 121 180.491 121H129.531ZM154.749 100.383H175.308C182.335 100.383 187.461 99.0435 190.683 96.3645C193.906 93.6466 195.517 90.0357 195.517 85.5318C195.517 82.2316 194.721 79.3196 193.129 76.7958C191.537 74.2721 189.266 72.2919 186.315 70.8553C183.403 69.4188 179.928 68.7005 175.89 68.7005H154.749V100.383ZM154.749 51.6361H173.444C176.9 51.6361 179.967 51.0343 182.646 49.8307C185.364 48.5882 187.499 46.841 189.052 44.5891C190.644 42.3371 191.44 39.6387 191.44 36.4937C191.44 32.184 189.907 28.709 186.839 26.0688C183.811 23.4285 179.501 22.1084 173.91 22.1084H154.749V51.6361ZM347.567 61.3622C347.567 74.3692 345.102 85.4348 340.171 94.559C335.279 103.683 328.6 110.653 320.136 115.467C311.711 120.243 302.237 122.631 291.715 122.631C281.115 122.631 271.603 120.223 263.177 115.409C254.752 110.594 248.093 103.625 243.201 94.5008C238.309 85.3765 235.863 74.3303 235.863 61.3622C235.863 48.3553 238.309 37.2897 243.201 28.1654C248.093 19.0411 254.752 12.0912 263.177 7.31547C271.603 2.50096 281.115 0.0937067 291.715 0.0937067C302.237 0.0937067 311.711 2.50096 320.136 7.31547C328.6 12.0912 335.279 19.0411 340.171 28.1654C345.102 37.2897 347.567 48.3553 347.567 61.3622ZM322 61.3622C322 52.9368 320.738 45.8315 318.214 40.0464C315.729 34.2612 312.215 29.8738 307.673 26.8841C303.13 23.8945 297.811 22.3996 291.715 22.3996C285.619 22.3996 280.3 23.8945 275.757 26.8841C271.214 29.8738 267.681 34.2612 265.158 40.0464C262.673 45.8315 261.43 52.9368 261.43 61.3622C261.43 69.7876 262.673 76.8929 265.158 82.6781C267.681 88.4632 271.214 92.8507 275.757 95.8403C280.3 98.83 285.619 100.325 291.715 100.325C297.811 100.325 303.13 98.83 307.673 95.8403C312.215 92.8507 315.729 88.4632 318.214 82.6781C320.738 76.8929 322 69.7876 322 61.3622ZM439.921 1.72443H465.139V79.1837C465.139 87.8808 463.062 95.4909 458.908 102.014C454.792 108.537 449.026 113.623 441.61 117.273C434.194 120.884 425.555 122.689 415.693 122.689C405.793 122.689 397.134 120.884 389.718 117.273C382.302 113.623 376.537 108.537 372.421 102.014C368.305 95.4909 366.248 87.8808 366.248 79.1837V1.72443H391.466V77.0288C391.466 81.5715 392.456 85.6095 394.436 89.1427C396.455 92.6759 399.289 95.452 402.939 97.471C406.589 99.49 410.84 100.5 415.693 100.5C420.586 100.5 424.837 99.49 428.448 97.471C432.098 95.452 434.913 92.6759 436.893 89.1427C438.912 85.6095 439.921 81.5715 439.921 77.0288V1.72443ZM481.345 22.5161V1.72443H579.304V22.5161H542.788V121H517.861V22.5161H481.345ZM633.395 1.72443H664.495L697.342 81.8627H698.74L731.587 1.72443H762.687V121H738.227V43.366H737.237L706.369 120.418H689.713L658.846 43.0748H657.855V121H633.395V1.72443ZM783.465 121V1.72443H863.836V22.5161H808.683V50.9372H859.701V71.7289H808.683V100.208H864.069V121H783.465Z"
                fill="#222222"
              />
            </svg>
          </div>
          <div className="about__content">
            <div className="about__left">
              <div>
                <a target="_blank" href="https://github.com/sanedidi/">
                  <img src={gitHub} alt="asd" />
                </a>
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                  className="about__ma"
                    id="panel-header"
                    aria-controls="panel-content"
                  >
                    Experience and skills
                  </AccordionSummary>
                  <AccordionDetails className='about__text'>
                    My name is Shaxzod, and I'm a front-end developer with
                    experience in creating dynamic and intuitive user
                    interfaces. My expertise includes using modern frameworks
                    such as React and Vue.js to build scalable and fast
                    applications. I'm also proficient in HTML, CSS, and
                    JavaScript, and have experience working with various tools
                    and libraries such as Bootstrap, Sass, and jQuery.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                  className="about__ma"
                    id="panel-header"
                    aria-controls="panel-content"
                  >
                    The possibility of cooperation:
                  </AccordionSummary>
                  <AccordionDetails className='about__text'>
                    I look forward to the opportunity to apply my skills and
                    experience to your project, collaborating to create amazing
                    user interfaces and bring your ideas to life.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                  className="about__ma"
                    id="panel-header"
                    aria-controls="panel-content"
                  >
                    Approach to work:
                  </AccordionSummary>
                  <AccordionDetails className='about__text'>
                    My passion for technology and creative approach enable me to
                    transform concepts into elegant web applications that are
                    not only functional but also beautiful. I strive to create
                    interfaces that not only meet users' functional needs but
                    also provide an amazing user experience. My design skills
                    and attention to detail allow me to consider every aspect of
                    user interaction with the application, from animations to
                    responsive design for mobile devices.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                  className="about__ma"
                    id="panel-header"
                    aria-controls="panel-content"
                  >
                    Communication and teamwork:
                  </AccordionSummary>
                  <AccordionDetails className='about__text'>
                    I also value communication and teamwork. Through my
                    experience working on group projects, I've learned to
                    effectively communicate with team members, establish clear
                    processes, and achieve common goals.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                  className="about__ma"
                    id="panel-header"
                    aria-controls="panel-content"
                  >
                    
                    Personal interests and aspirations:
                  </AccordionSummary>
                  <AccordionDetails className='about__text'>
                    In my free time, I continue to explore new technologies,
                    participate in developer communities, and share my knowledge
                    through webinars and meetups. I'm passionate about writing
                    quality code and constantly strive for professional growth.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
