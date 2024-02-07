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

import {
  ABOUT_P_ENGLISH,
  CITY_INFO_ENGLISH,
  LANGUAGES_ENGLISH,
  LEVELS_ENGLISH,
  HOBBIES_ENGLISH,
  EDUCATION_ENGLISH,
  WORK_EXP_ENGLISH,
  REFERENCES_ENGLISH,
} from "../components/English";
import {
  ABOUT_P_TURKISH,
  CITY_INFO_TURKISH,
  HOBBIES_TURKISH,
  LANGUAGES_TURKISH,
  LEVELS_TURKISH,
  EDUCATION_TURKISH,
  WORK_EXP_TURKISH,
  REFERENCES_TURKISH,
} from "../components/Turkish";
import { useState } from "react";

function English(props) {
  const [isEnglish, setIsEnglish] = useState(true);
  const translateHandler = (e) => {
    e.preventDefault();
    setIsEnglish((prev) => !prev);
  };
  return (
    <div className="CVWrapper">
      <header className="header">
        <h1 onClick={translateHandler}> Hüseyin Atakan Özler </h1>{" "}
      </header>
      <div className="contact">
        <div className="photoContainer">
          <img alt="photos" src={photo} />
        </div>
        <div className="about">
          <div className="aboutTitle">
            <h2>
              {" "}
              {isEnglish ? ABOUT_P_ENGLISH.title : ABOUT_P_TURKISH.title}{" "}
            </h2>
          </div>
          <div className="aboutP">
            <p style={{ fontSize: ".73rem" }}>
              {isEnglish ? ABOUT_P_ENGLISH.desc : ABOUT_P_TURKISH.desc}{" "}
            </p>{" "}
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
            <p>+90 (506) 701 90 88</p>
          </div>{" "}
          <div className="mail">
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;&nbsp;
            <p> {isEnglish ? CITY_INFO_ENGLISH : CITY_INFO_TURKISH} </p>{" "}
          </div>{" "}
        </div>
        <div style={{ marginTop: "-2vh" }} className="skills">
          <div className="skillsTitle">
            <h2>
              {isEnglish ? LANGUAGES_ENGLISH.title : LANGUAGES_TURKISH.title}
            </h2>
          </div>
          <div className="skillsList">
            <ul>
              <li>
                {" "}
                {isEnglish
                  ? LANGUAGES_ENGLISH.native
                  : LANGUAGES_TURKISH.native}
              </li>
              <li>
                {" "}
                {isEnglish ? LANGUAGES_ENGLISH.other : LANGUAGES_TURKISH.other}
              </li>
            </ul>
            <ul style={{ marginLeft: "-3vh" }}>
              <li>
                ({" "}
                {isEnglish
                  ? LANGUAGES_ENGLISH.nativeDegree
                  : LANGUAGES_TURKISH.nativeDegree}
                ){" "}
              </li>
              <li>
                ({" "}
                {isEnglish
                  ? LANGUAGES_ENGLISH.otherDegree
                  : LANGUAGES_TURKISH.otherDegree}
                ){" "}
              </li>
            </ul>
          </div>{" "}
        </div>
        <div style={{ marginTop: "-2vh" }} className="skills">
          {" "}
          <div className="skillsTitle">
            <h2>{isEnglish ? LEVELS_ENGLISH.title : LEVELS_TURKISH.title}</h2>
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
              <li>MS Office</li>
              <li>MATLAB</li>
            </ul>{" "}
            <ul style={{ marginLeft: "-2.5vw" }} className="levels">
              <li>
                ({isEnglish ? LEVELS_ENGLISH.inter : LEVELS_TURKISH.inter}){" "}
              </li>
              <li>
                ({isEnglish ? LEVELS_ENGLISH.inter : LEVELS_TURKISH.inter})
              </li>
              <li>
                ({isEnglish ? LEVELS_ENGLISH.beginner : LEVELS_TURKISH.beginner}
                ){" "}
              </li>
              <li>
                ({isEnglish ? LEVELS_ENGLISH.beginner : LEVELS_TURKISH.beginner}
                )
              </li>
              <li>
                ({isEnglish ? LEVELS_ENGLISH.beginner : LEVELS_TURKISH.beginner}
                )
              </li>
              <li>
                ({isEnglish ? LEVELS_ENGLISH.beginner : LEVELS_TURKISH.beginner}
                )
              </li>
              <li>
                ({isEnglish ? LEVELS_ENGLISH.beginner : LEVELS_TURKISH.beginner}
                )
              </li>
              <li>
                ({isEnglish ? LEVELS_ENGLISH.inter : LEVELS_TURKISH.inter})
              </li>
              <li>
                ({isEnglish ? LEVELS_ENGLISH.advanced : LEVELS_TURKISH.advanced}
                ){" "}
              </li>
            </ul>{" "}
          </div>
        </div>
        <div style={{ marginTop: "-2vh" }} className="skills">
          <div className="skillsTitle">
            <h2>{isEnglish ? HOBBIES_ENGLISH.title : HOBBIES_TURKISH.title}</h2>
          </div>
          <ul className="hobbies">
            <li>
              {isEnglish ? HOBBIES_ENGLISH.research : HOBBIES_TURKISH.research}
            </li>
            <li>{isEnglish ? HOBBIES_ENGLISH.chess : HOBBIES_TURKISH.chess}</li>
            <li>
              {isEnglish ? HOBBIES_ENGLISH.reading : HOBBIES_TURKISH.reading}
            </li>
            <li>
              {isEnglish ? HOBBIES_ENGLISH.sports : HOBBIES_TURKISH.sports}
            </li>
          </ul>
        </div>
      </div>
      <div className="information">
        {" "}
        <div className="education">
          <div className="educationTitle">
            <h2>
              {" "}
              {isEnglish ? EDUCATION_ENGLISH.title : EDUCATION_TURKISH.title}
            </h2>
          </div>
          <ul className="educationUl">
            <li>
              <h3> Uşak Lisesi (2012 - 2015) </h3>
            </li>
            <li>
              <h3>Özel Uşak Seçkin Temel Lisesi (2015 - 2016)</h3>
            </li>
            <li>
              <h3>
                {" "}
                {isEnglish
                  ? EDUCATION_ENGLISH.university
                  : EDUCATION_TURKISH.university}
                (2017 – 2022)
              </h3>
              <p>
                {" "}
                {isEnglish
                  ? EDUCATION_ENGLISH.universityDes
                  : EDUCATION_TURKISH.universityDes}
              </p>
            </li>
            <li>
              <h3>
                {" "}
                {isEnglish
                  ? EDUCATION_ENGLISH.secField
                  : EDUCATION_TURKISH.secField}
                (2019-2022)
              </h3>
              <p>
                {" "}
                {isEnglish
                  ? EDUCATION_ENGLISH.secFieldDes
                  : EDUCATION_TURKISH.secFieldDes}
              </p>
            </li>
          </ul>
        </div>
        <div className="workExp">
          <div className="educationTitle">
            <h2>
              {" "}
              {isEnglish ? WORK_EXP_ENGLISH.title : WORK_EXP_TURKISH.title}
            </h2>
          </div>
          <ul className="workExpUl">
            <li>
              <h3>INOFAB HEALTH (2021)</h3>
              <p>
                {" "}
                {isEnglish ? WORK_EXP_ENGLISH.des1 : WORK_EXP_TURKISH.des1}
              </p>
            </li>
            <li>
              <h3>Assisguard (2022)</h3>
              <p>
                {" "}
                {isEnglish ? WORK_EXP_ENGLISH.des2 : WORK_EXP_TURKISH.des2}
              </p>
            </li>
            <li>
              <h3>avcidedektor.com (2023)</h3>
              <p>{isEnglish ? WORK_EXP_ENGLISH.des3 : WORK_EXP_TURKISH.des3}</p>
            </li>
            <li>
              <h3>
                AloTech (2022 {isEnglish ? "Dec" : "Aralık"} - 2023{" "}
                {isEnglish ? "Dec" : "Aralık"})
              </h3>
              <p>
                {" "}
                {isEnglish ? WORK_EXP_ENGLISH.des5 : WORK_EXP_TURKISH.des5}
              </p>
            </li>
          </ul>
        </div>
        <div className="workExp reference">
          <div className="educationTitle">
            <h2>
              {" "}
              {isEnglish ? REFERENCES_ENGLISH.title : REFERENCES_TURKISH.title}
            </h2>
          </div>
          <ul className="workExpUl">
            <li>
              <h3>Prof. Dr. Altunkan Hızal</h3>
              <p>
                {isEnglish ? REFERENCES_ENGLISH.des1 : REFERENCES_TURKISH.des1}
              </p>
              <p>hizal@metu.edu.tr 0 (533) 514 37 72</p>
            </li>
            <li>
              <h3>Prof. Dr. Erdem Yazgan</h3>
              <p>
                {isEnglish ? REFERENCES_ENGLISH.des2 : REFERENCES_TURKISH.des2}
              </p>
              <p>erdem.yazgan@tedu.edu.tr 0 (312) 585 02 27</p>
            </li>
            <li>
              <h3>Assoc. Prof. Dr. Hüseyin Uğur Yıldız</h3>
              <p>
                {isEnglish ? REFERENCES_ENGLISH.des3 : REFERENCES_TURKISH.des3}
              </p>
              <p>hugur.yildiz@tedu.edu.tr 0 (312) 585 02 21</p>
            </li>
            <li>
              <h3>Dr. Aykut Yıldız</h3>
              <p>
                {isEnglish ? REFERENCES_ENGLISH.des4 : REFERENCES_TURKISH.des4}
              </p>
              <p>aykut.yildiz@tedu.edu.tr 0 (312) 585 02 78</p>
            </li>
          </ul>
        </div>{" "}
        <p
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            fontSize: "0.5rem",
            marginTop: "3vh",
          }}
        >
          {isEnglish
            ? "This CV is built with ReactJS."
            : "Bu CV ReactJS ile hazırlanmıştır."}
        </p>
      </div>
    </div>
  );
}

export default English;

//P.S: Given that the website is designed for PDF, the CV has been tailored accordingly.
