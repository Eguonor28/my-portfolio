import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio website" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>

        <div className={styles.profile}>
          <Image
            src="/images/easy.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className={styles.profileImage}
          />
          <p className={styles.description}>
            I'm a passionate developer specializing in modern web technologies.
          </p>
        </div>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About Me &rarr;</h2>
            <p>Learn more about my background and skills.</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Explore my recent work and contributions.</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch with me for opportunities.</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
