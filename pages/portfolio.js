import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import styles from '../styles/Portfolio.module.scss'

export default function Portfolio() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio | Ernesto Sotelo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <div className="main-content">
        <h1 className="title">Portfolio</h1>
        <div className={styles.projects}>
          <a href="/projects/tpack">
            <img
              className={styles.img}
              src="/project-tpack.svg"
              alt="Graphic for TPACK project."
            />
          </a>

          <a href="/projects/booktalk">
            <img
              className={styles.img}
              src="/project-booktalk.svg"
              alt="Graphic for Book Talk Project"
            />
          </a>

          <a href="/projects/hits">
            <img
              className={styles.img}
              src="/project-hits.svg"
              alt="Graphic for HITs module project."
            />
          </a>

          <a href="/projects/solarsystem">
            <img
              className={styles.img}
              src="/project-solarsystem.svg"
              alt="Graphic for Solar System Project"
            />
          </a>

          <a href="/projects/gamification">
            <img
              className={styles.img}
              src="/project-gamification.svg"
              alt="Graphic for Gamification Presentation project."
            />
          </a>

          <a href="projects/trainingprogram">
            <img
              className={styles.img}
              src="/project-trainingprogram.svg"
              alt="Graphic for training program proposal project."
            />
          </a>

          <a href="projects/tynker">
            <img
              className={styles.img}
              src="/project-tynker.svg"
              alt="Graphic for tynker project."
            />
          </a>
        </div>
      </div>
    </div>
  )
}
