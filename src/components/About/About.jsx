import React, { useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const academicAchievements = [
    {
      title: "2 Year College Diploma",
      description: "Centennial College | 2024",
      images: [getImageUrl("about/academicAchievements1.png")]
    },
    {
      title: "Official Transcript",
      description: "Centennial College | 2024",
      images: [
        getImageUrl("about/academicAchievements14a.png"),
        getImageUrl("about/academicAchievements14b.png")
      ]
    },
    {
      title: "Bachelor's degree diploma",
      description: "Samar College | 2018",
      images: [getImageUrl("about/academicAchievements3.png")]
    },
    {
      title: "Official Transcript",
      description: "Samar College | 2018",
      images: [
        getImageUrl("about/academicAchievements4a.png"),
        getImageUrl("about/academicAchievements4b.png"),
        getImageUrl("about/academicAchievements4c.png")
      ]
    },
    {
      title: "High School Diploma",
      description: "Samar National School | 2014",
      images: [getImageUrl("about/academicAchievements2.png")]
    },
    {
      title: "Certification of Eligibilty",
      description: "Civil Dervice Commission | 2018",
      images: [getImageUrl("about/academicAchievements5.png")]
    },
    {
      title: "Best Capstone Project - On-Job-Training Monitoring System",
      description: "Samar College | 2018",
      images: [getImageUrl("about/academicAchievements11.png")]
    },
    {
      title: "Well-Crafted Manuscript Project - On-Job-Training Monitoring System",
      description: "Samar College | 2018",
      images: [getImageUrl("about/academicAchievements12.png")]
    },
    {
      title: "Best Presentor Capstone Project - On-Job-Training Monitoring System",
      description: "Samar College | 2018",
      images: [getImageUrl("about/academicAchievements13.png")]
    },
    {
      title: "Special Commendation Excellent Academic Performance - Cum Laude Award",
      description: "Samar College | 2018",
      images: [getImageUrl("about/academicAchievements6.png")]
    },
    {
      title: "Special Commendation for Academic Performance - Dean's Lister",
      description: "Samar College | 2017 - 2018",
      images: [getImageUrl("about/academicAchievements7.png")]
    },
    {
      title: "CAS Outstanding Award in Performing Arts",
      description: "Samar College | 2017",
      images: [getImageUrl("about/academicAchievements8.png")]
    },
    {
      title: "Award of Distinction in Academic Performance - Dean's Lister",
      description: "Samar College | 2016 - 2017",
      images: [getImageUrl("about/academicAchievements9.png")]
    },
    {
      title: "Award of Distinction in Academic Performance - Dean's Lister",
      description: "Samar College | 2015 - 2016",
      images: [getImageUrl("about/academicAchievements10.png")]
    }
  ];

  const professionalDevelopment = [
    {
      title: "Gap Inc. Factory Approval Certificate",
      description: "Factory Process Audit Program | 2022",
      images: [getImageUrl("about/professionalAccomplishments3.png")]
    },
    {
      title: "Volunteer IT Service during the Roll-out",
      description: "LGU Integrated Financial Tools System | 2018",
      images: [getImageUrl("about/professionalAccomplishments1.png")]
    },
    {
      title: "Teleperformance Certificate of Completion",
      description: "NHI Customer Service Training | 2018",
      images: [getImageUrl("about/professionalAccomplishments2.png")]
    },
    {
      title: "Planning Workshop Formulation of Barangay Juvenile Intervention Program",
      description: "Capacity Building of BCPCs | 2017",
      images: [getImageUrl("about/professionalAccomplishments4.png")]
    },
    {
      title: "Leadership Training & Teambuilding Workshop",
      description: "Youth Empowerment Program | 2014",
      images: [getImageUrl("about/professionalAccomplishments5.png")]
    }
  ];

  const handleImageClick = (images) => {
    setSelectedImages(images);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

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
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
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
                      Bachelor's Degree – Bachelor of Science in Information Technology <br/>
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

          {/* Academic Achievements Section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Award icon" />
            <div className={styles.aboutItemText}>
              <h3>Academic Achievements</h3>
              <div className={styles.smallerText}>
                <ul className={styles.bulletList}>
                  {academicAchievements.map((achievement, index) => (
                    <li 
                      key={index}
                      className={styles.achievementItem}
                      onClick={() => handleImageClick(achievement.images)}
                    >
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                      {achievement.images.length > 1 && (
                        <span className={styles.multiImageIndicator}>
                          {achievement.images.length} images available
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {/* Professional Development Section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Professional Development</h3>
              <div className={styles.smallerText}>
                <ul className={styles.bulletList}>
                  {professionalDevelopment.map((item, index) => (
                    <li 
                      key={index}
                      className={styles.achievementItem}
                      onClick={() => handleImageClick(item.images)}
                    >
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      {item.images.length > 1 && (
                        <span className={styles.multiImageIndicator}>
                          {item.images.length} images available
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {/* Skills Section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
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

      {/* Modal for displaying images */}
      {selectedImages && (
        <div 
          className={styles.modal}
          onClick={() => {
            setSelectedImages(null);
            setCurrentImageIndex(0);
          }}
        >
          <div className={styles.modalContent}>
            <img 
              src={selectedImages[currentImageIndex]} 
              alt="Achievement certificate" 
              className={styles.modalImage}
            />
            {selectedImages.length > 1 && (
              <div className={styles.modalControls}>
                <button 
                  className={styles.navButton}
                  onClick={handlePrevImage}
                >
                  ←
                </button>
                <span className={styles.imageCounter}>
                  {currentImageIndex + 1} / {selectedImages.length}
                </span>
                <button 
                  className={styles.navButton}
                  onClick={handleNextImage}
                >
                  →
                </button>
              </div>
            )}
            <button 
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImages(null);
                setCurrentImageIndex(0);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;