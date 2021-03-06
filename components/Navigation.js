import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.scss'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="/logo-word.svg" alt="Logo" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/program-of-study">
        <a>Program of Study</a>
      </Link>
      <Link href="/goals-statement">
        <a>Goals Statement</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <a
        className={styles.resumeLink}
        href="/ernesto-sotelo_resume.pdf"
        target="_blank"
      >
        <img
          className={styles.resumeIcon}
          src="/resume-icon.svg"
          alt="Resume Icon"
        />
      </a>
      {/* 
      <Link href="/contact">
        <a>Contact</a>
      </Link> */}
    </nav>
  )
}
