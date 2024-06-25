import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = getImageUrl("contact/resume.pdf");
    link.download = "Kesha_Vaja_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:keshavaja000@gmail.com">keshavaja000@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/kesha-vaja-82986428a">www.linkedin.com/in/kesha-vaja-82986428a</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/kesha2105">https://github.com/kesha2105</a>
        </li>
        
      </ul>
    </footer>
  );
};
