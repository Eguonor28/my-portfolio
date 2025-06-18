import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} className={styles.projectLink}>
          View Project
        </a>
      </div>
    </div>
  );
}
