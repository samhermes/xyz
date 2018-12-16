import React from 'react'
import { Link } from 'gatsby'
import styles from "./layout.module.css"

import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className={styles.siteTitle}>
          <Link
            className={styles.siteTitleLink}
            to={'/'}
          >
            <span className={styles.sam}>
              Sam
            </span>
            Hermes
          </Link>
        </h1>
      )
    } else {
      header = (
        <p className={styles.siteTitle}>
          <Link
            className={styles.siteTitleLink}
            to={'/'}
          >
            <span className={styles.sam}>
              Sam
            </span>
            Hermes
          </Link>
        </p>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          width: '85%',
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
