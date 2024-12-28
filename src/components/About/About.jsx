import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {/* Education Section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <div className={styles.smallerText}>
                <ul className={styles.bulletList}>
                  <li>
                    <h4>
                      2 Year College Diploma – Software Engineering Technician <br/>
                      Centennial College, Canada | September 2023 - December 2024
                    </h4>
                    <h5>
                      This program is application-based and includes lectures
                      supported by practical software labs. I have improved the
                      following effective skills through teamwork and practical
                      projects, software engineering methodologies, programming
                      languages, and web development.
                    </h5>
                  </li>
                  <br/>
                  <li>
                    <h4>
                      Bachelor’s Degree – Bachelor of Science in Information Technology <br/>
                      Samar College, Philippines | June 2014 - April 2018
                    </h4>
                    <h5>
                      During the fourth year of the program, it equipped me with
                      the basic ability to conceptualize, design and implement
                      software applications. It prepares me to be an IT
                      professional who can perform installation, operation,
                      development, maintenance, and administration of computer
                      applications. Eventually, I attended an On-the-Job
                      Training (OJT) in IT firms and corporations which is in
                      SPI CRM Inc. I was given the opportunity to apply their
                      knowledge and skills in an actual work setting.
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* Professional Development Section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Professional Development</h3>
              <div className={styles.smallerText}>
                <ul className={styles.bulletList}>
                  <li>Volunteer IT Service during the Roll-out | LGU Integrated Financial Tools System | April 2 – 5, 2018</li>
                  <li>Leadership Training & Teambuilding Workshop | Youth Empowerment Program | October 13 – 14, 2014</li>
                </ul>
              </div>
            </div>
          </li>

          {/* Skills Section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills</h3>
              <div className={styles.smallerText}>
                <ul className={styles.bulletList}>
                  <li>Proficient in programming languages including C#, C++, Java, JavaScript, HTML, and CSS.</li>
                  <li>Hands-on experience with frameworks and libraries such as React, Node.js, and Express.js.</li>
                  <li>Competent in database management with SQL and MongoDB.</li>
                  <li>Strong problem-solving skills developed through real-world project experience.</li>
                  <li>Excellent communication and interpersonal skills, gained through roles in team environments.</li>
                  <li>Demonstrated ability to adapt quickly to new technologies and frameworks.</li>
                  <li>Soft skills include a strong work ethic, creativity, and adaptability.</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};