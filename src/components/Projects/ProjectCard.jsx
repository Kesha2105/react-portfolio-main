import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const handleCardClick = () => {
    const link = "https://github.com/kesha2105";
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    }
  };
  return (
  <div className={styles.card} onClick={handleCardClick}>
    <div className={styles.cardInner}>
      <div className={styles.cardFront}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.links}>
          <a href={demo}  target="_blank" rel="noopener noreferrer" className={styles.link}>
            Demo
          </a>
          {/* <a href={source}   target="_blank" rel="noopener noreferrer" className={styles.link}>
            Source
          </a> */}
        </div>
      </div>
      <div className={styles.cardBack}>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
       
      </div>
    </div>
  </div>
  );
};
