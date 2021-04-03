import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About| Ernesto Sotelo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <div className="main-content">
        <h1 className="title">About</h1>
        <div>
          {' '}
          <img className={styles.img} src="/bio-photo.png" alt="Photo of me." />
          <p className={styles.about}>
            <span className={styles.beginning}>
              Hi! My name is Ernesto Sotelo Dopico.{' '}
            </span>{' '}
            <br></br>
            I was born in Cuba and raised in Miami (yes, I do speak Spanish!). I
            served in the U.S. Army for four years as a 'Preventive Medicine
            Specialist', and was happy to discover the great state of Colorado
            (where I was stationed). After my military service, I once again had
            to figure out what I was going to do when I grew up so I completed
            my undergrad in Digital Media & Web Technology in which I received a
            formal education on design, and coding. However, I wanted to use my
            creativity and technological knowledge for something specific:
            Education. This is how my journey continued in North Carolina
            working towards my Master's in Education. <br /> <br />
            Currently I work at Forest View Elementary as a Bilingual Family
            Liaison, and working on two internships as I complete my final
            semester in grad school. I live with my dog Greywind (name is a
            reference from Game of Thrones) in the Triangle, enjoy hiking,
            soccer, tequila, board games, socializing (with all its difficulties
            during a pandemic), and always curious to try new things and learn
            new things!
          </p>
        </div>
      </div>
    </div>
  )
}
