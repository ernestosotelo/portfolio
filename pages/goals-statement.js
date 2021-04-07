import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import styles from '../styles/GoalsStatement.module.scss'

export default function GoalsStatement() {
  return (
    <div className="container">
      <Head>
        <title>Goals Statement| Ernesto Sotelo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <div className="main-content">
        <h1 className="title">Goals Statement</h1>
        <div className={styles.content}>
          <p className={styles.statement}>
            I intend to be employed in support of curricular and instructional design functions within the scope of the
            education industry. More specifically, by contributing to the design of digital instructional material,
            tools, and content with an emphasis on creative learner-centered design.
          </p>

          <p className={styles.skillsHeader}> Skills and Related Artifacts</p>

          <ul className={styles.skillsList}>
            <li>
              <em>
                Possess knowledge of the full life-cycle of instructional design processes (ADDIE or other industry
                accepted models) to design, develop and implement effective instructional materials, learning resources
                and content.{' '}
              </em>
              <br /> <br />
              The RFP (Request for Proposal) (
              <a className={styles.projectLink} href="/projects/trainingprogram">
                View Project
              </a>
              ) project allowed me to document the steps taken in the ADDIE process. As I led the collaborative effort
              in this project, I had to ensure that I learned not only my part of the process, but also my peers'
              process because I had to ensure that our proposal was cohesive given that tasks were broken up for
              efficiency.
            </li>
            <br /> <br />
            <li>
              <em>
                {' '}
                Maintain progressive knowledge of the trends in instructional design, learning methodologies and
                learning technology solutions.
              </em>{' '}
              <br /> <br /> My selection of the gamification meta-analysis during my course about Learning Theories is
              indicative of my continued interest and curiosity regarding instructional strategies, methods, and
              solutions. Gamification is a trend that I felt I needed to ensure I had the latest research regarding its
              practices. Instead of a Powerpoint presentation to use as an aid for my findings to be shared with peers
              in my class, I designed an interactive presentation aid ({' '}
              <a className={styles.projectLink} href="/projects/gamification">
                View Project
              </a>
              ) that my peers can follow, and / or view on their own at another time. The project, unironically,
              resembled some basic characteristics or depictions of gamification in order to contextualize the findings
              in a related presentational design.
            </li>
            <br /> <br />
            <li>
              <em> Experience designing content and activities for use in a learning management system (LMS).</em>{' '}
              <br /> <br />
              Although I have designed content for Canvas in a class, through my current internship I am working closely
              with someone in the field not only supporting in some of the design aspects of the content, but completely
              developing the Canvas course myself (
              <a className={styles.projectLink} href="/projects/hits">
                View Project
              </a>
              )
            </li>
            <br /> <br />
            <li>
              <em>
                {' '}
                Experience utilizing course / presentation authoring software such as Articulate 360, and Microsoft
                Powerpoint.
              </em>
              <br /> <br />I have utilized Articulate 360, and Microsoft Powerpoint in several of my projects:
              Gamification Presentation: (
              <a className={styles.projectLink} href="/projects/gamification">
                View Project
              </a>
              ), TPACK Instructional Resource (
              <a className={styles.projectLink} href="/projects/tpack">
                View Project
              </a>
              ), - Book Talk Presentation: (
              <a className={styles.projectLink} href="/projects/booktalk">
                View Project
              </a>
              ), & Solar System Lesson (
              <a className={styles.projectLink} href="/projects/solarsystem">
                View Project
              </a>
              ). <br /> <br />
              While there may be discrepancies in some of these projects that need to be revisited, it has been rather
              lack of time than proficiency that has prevented me from attending to some of these issues.
            </li>
            <br /> <br />
            <li>
              <em>
                {' '}
                Experience utilizing graphic and image authoring tools such as Adobe Photoshop, Adobe Illustrator, and
                Adobe XD, Canva.{' '}
              </em>
              <br /> <br />
              Designing graphics, and visuals is part of my favorite aspect of the instructional design process. All my
              projects include original designs, graphics, etc. (including this website).
            </li>
            <br /> <br />
            <li>
              <em> Experience in web design with proficiency in languages such as HTML, and CSS. </em>
              <br /> <br /> Not only did I write the code for this website, but I also use my knowledge of HTML and CSS
              to work with Canvas (
              <a className={styles.projectLink} href="/projects/hits">
                View Project
              </a>
              ). This allows me to structure and design my Canvas pages with more cohesion.
            </li>
            <br /> <br />
            <li>
              <em>Experience with graphic design and visual communication strategies.</em> <br /> <br />
              Overall, all my projects utilize visual communication strategies. I design visual assets that either
              enhance or support instructional material, or content.
            </li>
            <br /> <br />
            <li>
              <em> Experience with video editing and uses in teaching and learning.</em>
              <br /> <br />
              In the Tynker Instructional Video project I demonstrate that I can use screencasting technology, but also
              video editing software. Although, video editing is certainly an aspect I need to further explore more
              given that I do not create video content sufficiently to continue to sharpen this skill and competency. (
              <a className={styles.projectLink} href="/projects/tynker">
                View Project
              </a>
              )
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
