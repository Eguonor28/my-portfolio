import Head from "next/head";
import styles from "../styles/About.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>About Me</h1>

        <section className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.skillsList}>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Experience</h2>
          <div className={styles.experience}>
            <h3>Web Developer at XYZ Corp</h3>
            <p>2020 - Present</p>
            <p>
              Developed and maintained web applications using modern frameworks.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
