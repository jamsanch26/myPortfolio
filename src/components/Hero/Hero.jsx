import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const downloadPDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("myResume.pdf");
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.content} id="pdf-content">
        <h1 className={styles.title}>Hi, I'm Jam</h1>
        <p className={styles.description}>
          Welcome to my page! I'm a fresh graduate of the Software Engineering Technician program, with a prior Bachelor of Science degree in Information Technology.
          If you're interested or would like to see my resume, kindly click the button below. I look forward to connecting!
        </p>
        <button onClick={downloadPDF} className={styles.contactBtn}>
          Contact Me
        </button>
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