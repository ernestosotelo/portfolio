import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/Navigation'
import styles from './Project.module.scss'

export default function BookTalk() {
  return (
    <div className="container">
      <Head>
        <title>Projects - TPACK| Ernesto Sotelo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <div className="main-content">
        <h1 className="title">Project Details</h1>
        <img
          className={styles.projectImg}
          src="/project-booktalk.svg"
          alt="Graphic for Book Talk Project"
        />

        <iframe
          className="powerpoint"
          src="https://oitncsu-my.sharepoint.com/personal/esotelo_ncsu_edu/_layouts/15/Doc.aspx?sourcedoc={d26eb1c9-b32c-49bd-b09c-25743d952b63}&amp;action=embedview&amp;wdAr=1.7777777777777777"
          width="962px"
          height="565px"
          frameborder="0"
        >
          This is an embedded{' '}
          <a target="_blank" href="https://office.com">
            Microsoft Office
          </a>{' '}
          presentation, powered by{' '}
          <a target="_blank" href="https://office.com/webapps">
            Office
          </a>
          .
        </iframe>

        <h2 className={styles.annotationHeader}>Context</h2>
        <p className={styles.annotationBody}>
          This project was completed for a class in support of a Zoom
          presentation.
        </p>
        <h2 className={styles.annotationHeader}>Conditions</h2>
        <p className={styles.annotationBody}>
          There was a time constraint of about 1 week to complete the project,
          given that the project was based on a book that needed to first be
          read. Some graphics were adapted elsewhere, but modified for the
          overall layout and design of the presentation.
        </p>
        <h2 className={styles.annotationHeader}>Scope</h2>
        <p className={styles.annotationBody}>
          The project was completed, and was utilized as a presentation aid
          during my book talk conducted via Zoom.
        </p>
        <h2 className={styles.annotationHeader}>Role</h2>
        <p className={styles.annotationBody}>
          I completed this project on my own, and given that I read the book, I
          contributed to the overall content of this project.{' '}
        </p>
      </div>
    </div>
  )
}
