/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Ernesto Sotelo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="main">
        <h1 className={styles.introduction_title}>Hello, I'm Ernesto.</h1>
        <p className={styles.introduction_subtitle}>Instructional Designer</p>
        <p className={styles.introduction_description}>
          As an Instructional Designer I seek to utilize my knowledge about
          technology, design, and the way people learn to promote creative
          learning experiences that are engaging, culturally responsive, and
          accessible.{' '}
        </p>
      </div>
    </div>
  )
}
