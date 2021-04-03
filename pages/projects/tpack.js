import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/Navigation'
// import styles from '../../styles/Project.module.scss'

export default function TPACK() {
  return (
    <div className="container">
      <Head>
        <title>Projects - TPACK| Ernesto Sotelo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="main-content">
        <h1 className="title">Project Details</h1>
        <img
          className={styles.projectImg}
          src="/project-tpack.svg"
          alt="Graphic for TPACK project."
        />

        <h2 className={styles.annotationHeader}>Context</h2>
        <p className={styles.annotationBody}>
          Project was completed during an internship at Forest View Elementary
          School.
        </p>
        <h2 className={styles.annotationHeader}>Conditions</h2>
        <p className={styles.annotationBody}>
          {' '}
          There was a 2-week time constraint for this project. Content was
          partially provided and graphics contained in this project are either
          original, or modified to be better suited for the overall design of
          the project.
        </p>
        <h2 className={styles.annotationHeader}>Scope</h2>
        <p className={styles.annotationBody}>
          This project was utilized as a resource for teachers at Forest View
          Elementary School.
        </p>
        <h2 className={styles.annotationHeader}>Role</h2>
        <p className={styles.annotationBody}>
          Overall, I completed this project on my own, with limited content and
          resources provided by the technology facilitator at the school.
        </p>
      </div>
    </div>
  )
}
