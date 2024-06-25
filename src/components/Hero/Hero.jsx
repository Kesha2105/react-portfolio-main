import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const roles = ["Web Developer", "Java Developer", "Software Developer"];
  const [currentRole, setCurrentRole] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [roles.length]);


  
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = getImageUrl("../keshaResume.pdf"); // Adjust the path as needed
    link.download = "Kesha_Vaja_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
 


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kesha</h1>
        <p className={styles.role}>{roles[currentRole]}</p>
        <p className={styles.description}>
        I'm a recent graduate and aspiring Java and full-stack developer, eager to start my career. Reach out if you'd like to learn more!
        </p>
        <button onClick={handleResumeDownload} className={styles.downloadBtn}>
          Download Resume
        </button>

      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
