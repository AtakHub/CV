import {
  faBriefcase,
  faC,
  faCalculator,
  faEnvelope,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import "./English.css";
import photo from "./WhatsApp Image 2023-10-29 at 04.12.49.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faJs,
  faLinux,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const ABOUT_P = `
I graduated from TED University with honors, holding a bachelor's degree in Electrical and Electronics Engineering. Alongside my expertise in electrical engineering and electronics, I pursued a well-rounded education by taking diverse core courses such as Physics, Elementary German, Introduction to Sociology, World History, and Children's Literature. Additionally, I expanded my academic horizon by completing Business and Administrations as a Secondary Field, aligning with the principles of a liberal education.

Recognizing my affinity for software development, I further honed my skills as a front-end web developer after graduating. Throughout my academic journey, I consistently garnered strong references from my professors, attesting to my dedication and proficiency. In the professional realm, I am committed to delivering my utmost to any organization I am part of, while maintaining a respectful and collaborative approach towards both the work environment and my colleagues.
`;

function English(props) {
  return (
    <div className="CVWrapper">
      <header className="header">
        <button
          className="button"
          onClick={props.onClick}
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          {" "}
          Click Here For Turkish CV{" "}
        </button>
        <h1>Hüseyin Atakan Özler</h1>
      </header>
      <div className="contact">
        <div className="photoContainer">
          <img alt="photo" src={photo} />
        </div>
        <div className="about">
          <div className="aboutTitle">
            <h2>About Me</h2>
          </div>
          <div className="aboutP">
            <p style={{ fontSize: ".73rem" }}>{ABOUT_P} </p>{" "}
          </div>
        </div>
        <div className="info">
          <div className="mail">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;&nbsp;
            <p>hatakanozler@gmail.com</p>
          </div>{" "}
          <div className="mail">
            <FontAwesomeIcon icon={faMobile} />
            &nbsp;&nbsp;
            <p>0 (506) 701 90 88</p>
          </div>{" "}
          <div className="mail">
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;&nbsp;
            <p>Uşak, Türkiye</p>{" "}
          </div>{" "}
        </div>
        <div style={{ marginTop: "-2vh" }} className="skills">
          <div className="skillsTitle">
            <h2>Yabancı Diller</h2>
          </div>
          <div className="skillsList">
            <ul>
              <li>Türkçe</li>
              <li>İngilizce </li>
            </ul>
            <ul style={{ marginLeft: "-3vh" }}>
              <li>(Anadil) </li>
              <li>(İleri Seviye) </li>
            </ul>
          </div>{" "}
        </div>
        <div style={{ marginTop: "-2vh" }} className="skills">
          {" "}
          <div className="skillsTitle">
            <h2>Skills</h2>
          </div>{" "}
          <div className="skillsList">
            <ul className="icons">
              <li>
                <FontAwesomeIcon
                  style={{ color: "rgb(239,216,26)" }}
                  icon={faJs}
                />{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon style={{ color: "#03c0e2" }} icon={faReact} />
              </li>
              <li>
                <FontAwesomeIcon style={{ color: "#03c0e2" }} icon={faReact} />
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  style={{ color: "rgb(135,207,51)" }}
                  icon={faNodeJs}
                />{" "}
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "rgb(255,22,18)" }}
                  icon={faJava}
                />{" "}
              </li>{" "}
              <li>
                <FontAwesomeIcon
                  style={{ color: "rgb(42,82,215)" }}
                  icon={faC}
                />{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#3B3B3B" }}
                  icon={faLinux}
                />{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  style={{ color: "rgb(211,57,4)" }}
                  icon={faBriefcase}
                />{" "}
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "rgb(107,180,170)" }}
                  icon={faCalculator}
                />{" "}
              </li>
            </ul>
            <ul className="names">
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>Java</li>
              <li>C</li>
              <li>Linux</li>
              <li>MS Office Programs</li>
              <li>MATLAB</li>
            </ul>{" "}
            <ul style={{ marginLeft: "-2.5vw" }} className="levels">
              <li>(Intermediate) </li>
              <li>(Intermediate)</li>
              <li>(Begginner) </li>
              <li>(Begginner)</li>
              <li>(Begginner)</li>
              <li>(Begginner)</li>
              <li>(Begginner)</li>
              <li>(Advanced)</li>
              <li>(Intermediate) </li>
            </ul>{" "}
          </div>
        </div>
        <div style={{ marginTop: "-2vh" }} className="skills">
          <div className="skillsTitle">
            <h2>Hobbies</h2>
          </div>
          <ul className="hobbies">
            <li>Research</li>
            <li>Chess</li>
            <li>Reading</li>
            <li>Sports</li>
          </ul>
        </div>
      </div>
      <div className="information">
        {" "}
        <div className="education">
          <div className="educationTitle">
            <h2>Education</h2>
          </div>
          <ul>
            <li>
              <h3> Uşak Lisesi (2012 - 2015) </h3>
            </li>
            <li>
              <h3>Özel Uşak Seçkin Temel Lisesi (2015 - 2016)</h3>
            </li>
            <li>
              <h3>Ted University (2017 – 2022)</h3>
              <p>Electrical – Electronics Engineering Program </p>
            </li>
            <li>
              <h3>Secondary Field (2019-2022)</h3>
              <p>Business and Administration </p>
            </li>
          </ul>
        </div>
        <div className="workExp">
          <div className="educationTitle">
            <h2>Work Experience</h2>
          </div>
          <ul>
            <li>
              <h3>INOFAB HEALTH (2021)</h3>
              <p>Intern Embedded Software</p>
            </li>
            <li>
              <h3>Assisguard (2022)</h3>
              <p>Candidate Engineer</p>
            </li>
            <li>
              <h3>avcidedektor.com (2023)</h3>
              <p>I developed this site in ReactJS.</p>
            </li>
            <li>
              <h3>AloTech (2022 - Present)</h3>
              <p>Technical Support Specialist</p>
            </li>
          </ul>
        </div>
        <div className="workExp">
          <div className="educationTitle">
            <h2>References</h2>
          </div>
          <ul>
            <li>
              <h3>Prof. Dr. Altunkan Hızal</h3>
              <p>
                ODTÜ Electrical-Electronics Engineering Program Retired
                Professor, Advisor at ASELSAN A.Ş.
              </p>
              <p>hizal@metu.edu.tr 0 (533) 514 37 72</p>
            </li>
            <li>
              <h3>Prof. Dr. Erdem Yazgan</h3>
              <p>
                TED University Electrical-Electronics Engineering Program
                Professor
              </p>
              <p>erdem.yazgan@tedu.edu.tr 0 (312) 585 02 27</p>
            </li>
            <li>
              <h3>Assoc. Prof. Dr. Hüseyin Uğur Yıldız</h3>
              <p>
                TED University Electrical-Electronics Engineering Program
                Departmant Chair
              </p>
              <p>hugur.yildiz@tedu.edu.tr 0 (312) 585 02 21</p>
            </li>
            <li>
              <h3>Dr. Aykut Yıldız</h3>
              <p>
                TED University Electrical-Electronics Engineering Program
                Professor
              </p>
              <p>aykut.yildiz@tedu.edu.tr 0 (312) 585 02 78</p>
            </li>
          </ul>
        </div>{" "}
        <p style={{ marginTop: "3vh" }}>This CV is built with ReactJS.</p>
      </div>
    </div>
  );
}

export default English;
