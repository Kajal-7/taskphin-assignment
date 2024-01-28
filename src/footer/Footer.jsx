import React from 'react'
import styles from'./Footer.module.css'

/*
@description
The component renders a simple footer.
*/

const Footer = () => {
  return (
    <div id={styles.footer}>Taskphin Assignment - <span id={styles.name}>Kajal Kaushal</span></div>
  )
}

export default Footer