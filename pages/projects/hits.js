import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/Navigation'
import styles from './Project.module.scss'

export default function HITs() {
  return (
    <div className="container">
      <Head>
        <title>Projects - HITs| Ernesto Sotelo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <div className="main-content">
        <h1 className="title">Project Details</h1>
        <img
          className={styles.projectImg}
          src="/project-hits.svg"
          alt="Graphic for the HITs project"
        />

        <img
          className="screencast"
          src="/screencast-CANVAS.gif"
          alt="Graphic for ScreenCast of Canvas"
        />

        <h2 className={styles.annotationHeader}>Context</h2>
        <p className={styles.annotationBody}>
          This project is still in progress as part of an internship with Durham
          Public Schools.
        </p>
        <h2 className={styles.annotationHeader}>Conditions</h2>
        <p className={styles.annotationBody}>
          Roughly 3 weeks has been alloted to complete this project, and the
          content has been provided by the lead of this project whom I am
          assisting. Some graphics were provided as rough examples of what is
          expected, but I enhanced the graphics, and created additional graphics
          for the overall layout of the project, and content.
        </p>
        <h2 className={styles.annotationHeader}>Scope</h2>
        <p className={styles.annotationBody}>
          The project is still in progress, and it is intended to be a
          professional development module for teachers at Durham Public Schools.
        </p>
        <h2 className={styles.annotationHeader}>Role</h2>
        <p className={styles.annotationBody}>
          This project is a collaborative effort in which the other team member
          is responsible for providing the general content, and I am responsible
          for the overall layout, graphic design, general organization, and
          development of the course on the LMS (Canvas).{' '}
        </p>
      </div>
    </div>
  )
}
