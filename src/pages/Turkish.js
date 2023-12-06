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

import "./English.css";
const ABOUT_P = `
TED Üniversitesi Elektrik ve Elektronik Mühendisliği bölümünden onur öğrencisi olarak mezun oldum. Elektrik elektronik mühendisliği alanındaki eğitimimin yanı sıra, Fizik, Temel Almanca, Sosyolojiye Giriş, Dünya Tarihi ve Çocuk Edebiyatı gibi çeşitli temel dersler aldım. Ayrıca, liberal eğitim ilkelerine uygun olarak İşletme'yi Ek Dal olarak tamamlayarak akademik ufkumu genişlettim. Akademik yolculuğum boyunca, çalışkanlığımı ve yeterliliğimi kanıtlayan profesörlerimden sürekli olarak güçlü referanslar aldım. Eğitimim süresince, yazılım geliştirmeye olan ilgimin farkına vararak, mezun olduktan sonra front-end web geliştiricisi olarak becerilerimi ilerlettim. Profesyonel alanda, hem çalışma ortamına hem de meslektaşlarıma karşı saygılı ve işbirlikçi bir yaklaşım sürdürürken, parçası olduğum kuruluşa elimden gelenin en iyisini sunmaya kararlıyım.
`;

const Turkish = (props) => {
  return (
    <div className="CVWrapper">
      <header className="header">
        <button
          className="button"
          onClick={props.onClick}
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          {" "}
          İngilizce CV için Tıklayın{" "}
        </button>
        <h1>Hüseyin Atakan Özler</h1>
      </header>
      <div className="contact">
        <div className="photoContainer">
          <img alt="photo" src={photo} />
        </div>
        <div className="about">
          <div className="aboutTitle">
            <h2>Hakkımda</h2>
          </div>
          <div className="aboutP">
            <p style={{ fontSize: ".8rem" }}>{ABOUT_P} </p>{" "}
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
        <div style={{ marginTop: "-1vh" }} className="skills">
          {" "}
          <div className="skillsTitle">
            <h2>Beceriler</h2>
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
              <li>JavaScript </li>
              <li>ReactJS</li>
              <li>NextJS </li>
              <li>NodeJS </li>
              <li>Java</li>
              <li>C </li>
              <li>Linux </li>
              <li>MS Office</li>
              <li>MATLAB </li>
            </ul>{" "}
            <ul style={{ marginLeft: "-2.5vw" }} className="levels">
              <li>(Orta Seviye) </li>
              <li>(Orta Seviye)</li>
              <li>(Başlangıç Seviye) </li>
              <li>(Başlangıç Seviye)</li>
              <li>(Başlangıç Seviye)</li>
              <li>(Başlangıç Seviye)</li>
              <li>(Başlangıç Seviye)</li>
              <li>(İleri Seviye)</li>
              <li>(Orta Seviye) </li>
            </ul>{" "}
          </div>
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
        <div style={{ marginTop: "-1vh" }} className="skills">
          <div className="skillsTitle">
            <h2>Hobiler</h2>
          </div>
          <ul className="hobbies">
            <li>Araştırmak</li>
            <li>Satranç</li>
            <li>Okumak</li>
            <li>Spor</li>
          </ul>
        </div>
      </div>
      <div className="information">
        {" "}
        <div className="education">
          <div className="educationTitle">
            <h2>Eğitim</h2>
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
              <p>Elektrik – Elektronik Mühendisliği Programı </p>
            </li>
            <li>
              <h3>Ek Dal (2019-2022)</h3>
              <p>İşletme </p>
            </li>
          </ul>
        </div>
        <div className="workExp">
          <div className="educationTitle">
            <h2>Deneyim</h2>
          </div>
          <ul>
            <li>
              <h3>INOFAB HEALTH (2021)</h3>
              <p>Stajyer Gömülü Yazılım</p>
            </li>
            <li>
              <h3>Assisguard (2022)</h3>
              <p>Aday Mühendis</p>
            </li>
            <li>
              <h3>avcidedektor.com (2023)</h3>
              <p>Bu siteyi ReactJS ile geliştirdim.</p>
            </li>
            <li>
              <h3>AloTech (2022 - Günümüz)</h3>
              <p>Teknik Destek Uzmanı</p>
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
                Emekli ODTÜ Elektrik-Elektoronik Programı, Profesör , ASELSAN
                A.Ş. Danışman
              </p>
              <p>hizal@metu.edu.tr</p>
              <p>0 (533) 514 37 72</p>
            </li>
            <li>
              <h3>Prof. Dr. Erdem Yazgan</h3>
              <p>TED Üniversitesi Elektrik-Elektoronik Programı, Profesör</p>
              <p>erdem.yazgan@tedu.edu.tr</p>
              <p>0 (312) 585 02 27</p>
            </li>
            <li>
              <h3>Assoc. Prof. Dr. Hüseyin Uğur Yıldız</h3>
              <p>
                TED Üniversitesi Elektrik-Elektoronik Programı, Bölüm Başkanı
              </p>
              <p>hugur.yildiz@tedu.edu.tr</p>
              <p>0 (312) 585 02 21</p>
            </li>
            <li>
              <h3>Dr. Aykut Yıldız</h3>
              <p>
                TED Üniversitesi Elektrik-Elektoronik Programı, Öğretim Üyesi
              </p>
              <p>aykut.yildiz@tedu.edu.tr</p>
              <p>0 (312) 585 02 78</p>
            </li>
          </ul>
        </div>
        <p style={{ marginTop: "-2vh" }}>Bu CV ReactJS ile hazırlanmıştır.</p>
      </div>
    </div>
  );
};
export default Turkish;
//        <p style={{ fontSize: ".8rem" }}>Bu CV ReactJS ile hazırlanmıştır.</p>
