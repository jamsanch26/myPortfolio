import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jam</h1>
        <p className={styles.description}>
          Welcome to my page! I'm a fresh graduate of the Software Engineering Technician program, with a prior Bachelor of Science degree in Information Technology.
          If you're interested or would like to see my resume, kindly click the 'Contact Me' button. I look forward to connecting!
        </p>
        <a href={getImageUrl("hero/myResume.pdf")} download className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myfaviconImg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};