import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import styles from '../styles/ProgramOfStudy.module.scss'

export default function ProgramOfStudy() {
  return (
    <div className="container">
      <Head>
        <title>Program of Study| Ernesto Sotelo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="main-content">
        <h1 className="title">Program of Study</h1>
        <img
          className={styles.img}
          src="/diploma-graphic.svg"
          alt="Diploma graphic"
        />

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.courseNumber}>Course Number</th>
              <th className={styles.courseName}>Course Name</th>

              <th className={styles.instructor}>Instructor</th>
              <th className={styles.courseDescription}>Course Description</th>

              <th className={styles.date}>Date Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TED 551</td>
              <td>Technology Education: A Discipline</td>

              <td>Dr. Cameron DeLeon Denson</td>
              <td className={styles.courseDescription}>
                Defines essential attributes of technology and examines the
                relationship between technology education and related
                disciplines. Analyzes the theory, models, and literature that
                constitute the foundation of technology education. Synthesizes
                relevant research and identifies areas of needed research.
              </td>
              <td>December 6, 2019</td>
            </tr>
            <tr>
              <td>EDP 504</td>
              <td>Advanced Educational Psychology</td>

              <td>Dr. John Leith Nietfeld</td>
              <td className={styles.courseDescription}>
                A critical appraisal of current psychological findings relevant
                to educational practice and theory.
              </td>
              <td>December 6, 2019</td>
            </tr>
            <tr>
              <td>ECI 511</td>
              <td>Introduction to Learning Design and Technology</td>

              <td>Dr. Julia McKeown</td>
              <td className={styles.courseDescription}>
                Introduction to the Learning, Design, and Technology master's
                program at North Carolina State University and to the field of
                instructional design and educational technology, with an
                investigation of relevant careers, important theories and models
                guiding practice, and noteworthy research findings by area.
              </td>
              <td>December 6, 2019</td>
            </tr>
            <tr>
              <td>EAC 539</td>
              <td>Teaching in the Online Environment</td>

              <td>Dr. Amy Orders</td>
              <td className={styles.courseDescription}>
                The course focuses on exploring the issues and considerations in
                online teaching and introduce students to some of the tools
                involved in the process. Students will develop strategies for
                teaching online and for managing the online classroom.
              </td>
              <td>December 6, 2019</td>
            </tr>
            <tr>
              <td>ECI 709</td>
              <td>
                Special Problems In Curriculum and Instruction: Learning
                Sciences
              </td>

              <td>Dr. Allison Liu</td>
              <td className={styles.courseDescription}>
                In-depth study of topical problems in curriculum and instruction
                selected from areas of current concern to practitioners in
                education.
              </td>
              <td>April 23, 2020</td>
            </tr>
            <tr>
              <td>ECI 722</td>
              <td>Theory and Research in Distance Education</td>

              <td>Dr. Kevin Matthew Oliver</td>
              <td className={styles.courseDescription}>
                Introduction to distance education foundations, models, and
                underlying theories. Analysis of distance education research
                findings, research and evaluation methods, and management in
                varied settings--virtual schools, higher education, continuing
                education, and corporate e-learning. Application of distance
                education standards and research-based findings to the design of
                original course plans and materials prototypes, including
                appropriate recommendations for online teaching and community
                building, online student support, and online student assessment.
              </td>
              <td>April 23, 2020</td>
            </tr>
            <tr>
              <td>ECI 514</td>
              <td>Developing and Delivering Online Instruction</td>
              <td>Dr Julia McKeown</td>
              <td className={styles.courseDescription}>
                Examination of learning theories and research-based principles
                to design and apply appropriate digital tools to create
                maximally effective educational products.
              </td>
              <td>April 23, 2020</td>
            </tr>
            <tr>
              <td>ST 511</td>
              <td>Statistical Methods For Researchers I</td>
              <td>Shuting Wang</td>
              <td className={styles.courseDescription}>
                Basic concepts of statistical models and use of samples;
                variation, statistical measures, distributions, tests of
                significance, analysis of variance and elementary experimental
                design, regression and correlation, chi-square.
              </td>
              <td>November 17, 2020</td>
            </tr>
            <tr>
              <td>ECI 517</td>
              <td>Theoretical Foundations of Advanced Learning Environments</td>

              <td>Dr. Julia McKeown</td>
              <td className={styles.courseDescription}>
                Examination and application of behavioral, cognitive, and
                constructivist theoretical frameworks underlying the design and
                development of advanced technology-enhanced learning
                environments.
              </td>
              <td>November 17, 2020</td>
            </tr>
            <tr>
              <td>ECI 515</td>
              <td>
                Cultural Investigations and Technical Representations in
                Education
              </td>

              <td>Dr. Kevin Matthew Oliver</td>
              <td className={styles.courseDescription}>
                Cultural Investigations and Technical Representations in
                Education Examination of contemporary approaches that educators
                can use to help their students construct cultural understanding
                in education settings through investigations and technical
                representations of culture with emerging tools (e.g., mapped
                cultural tours, AR/VR heritage exhibition, documentary, social
                media, games, fabrication, data analytics and visualization).
                November 17, 2020.
              </td>
              <td>November 17, 2020</td>
            </tr>
            <tr>
              <td>ECI 500</td>
              <td>Theory and Practice In Teaching Diverse Populations</td>

              <td>Dr. Patricia Marshall</td>
              <td className={styles.courseDescription}>
                Theory and Practice In Teaching Diverse Populations Analysis of
                literature and research in related to impact of cultural factors
                on teaching and learning in contemporary schools. Exploration of
                teaching techniques and curricular directions designed to
                improve school experiences for diverse populations in K-12
                settings.
              </td>
              <td>April 30 2021</td>
            </tr>
            <tr>
              <td>ECI 516</td>
              <td>Design and Evaluation Of Instructional Materials</td>

              <td>Dr. Deniz Eseryel</td>
              <td className={styles.courseDescription}>
                Characteristics and selection of various media for instruction
                and their use in educational settings. Design and production of
                instructional materials. Analysis of research in the field.
                Individualized projects and assignments. Application of grounded
                research and theory concerning learning to design of
                instructional materials. Structured projects and practical
                experiences used to transfer design principles and evaluate
                instructional products.
              </td>
              <td>April 30 2021</td>
            </tr>
            <tr>
              <td>ECI 652</td>
              <td>
                Field-Based Applications of Learning Design and Technology
              </td>

              <td>Dr. Julia McKeown </td>
              <td className={styles.courseDescription}>
                Characteristics and selection of various media for instruction
                and their use in educational settings. Design and production of
                instructional materials. Analysis of research in the field.
                Individualized projects and assignments. Application of grounded
                research and theory concerning learning to design of
                instructional materials. Structured projects and practical
                experiences used to transfer design principles and evaluate
                instructional products.
              </td>
              <td>April 30 2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
