import Head from "next/head";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Project.module.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      imageUrl: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio built with Next.js",
      imageUrl: "/images/project2.jpg",
      technologies: ["Next.js", "CSS Modules"],
      link: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>My Projects</h1>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
