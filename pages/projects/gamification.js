import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/Navigation'
import styles from './Project.module.scss'

export default function Gamification() {
  return (
    <div className="container">
      <Head>
        <title>Projects - Gamification| Ernesto Sotelo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="main-content">
        <h1 className="title">Project Details</h1>
        <img
          className={styles.projectImg}
          src="/project-gamification.svg"
          alt="Graphic for the Gamification project."
        />

        <h2 className={styles.annotationHeader}>Context</h2>
        <p className={styles.annotationBody}>
          This project was worked on as part of a class project.
        </p>
        <h2 className={styles.annotationHeader}>Conditions</h2>
        <p className={styles.annotationBody}>
          There was roughly 2 weeks to complete this project. This project was a
          presentation based on a Meta-analysis regarding gamification that I
          selected. Therefore, I put the content together and the graphics used
          were created as original material.{' '}
        </p>
        <h2 className={styles.annotationHeader}>Scope</h2>
        <p className={styles.annotationBody}>
          Althought this project was completed, it needs to be revised in order
          to eliminate some minor animation discrepancies. The project was used
          as a presentation aid for a class.{' '}
        </p>
        <h2 className={styles.annotationHeader}>Role</h2>
        <p className={styles.annotationBody}>
          I designed this entire interactive presentation aid in Articulate 360
          utilizing selected information from the research paper the content is
          based on.
        </p>
      </div>
    </div>
  )
}
