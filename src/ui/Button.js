import React, { memo } from 'react'
import styles from './Button.module.css'

/*
@description
The component renders a custom made styles button.
*/

const Button = memo(({onClick, title, type}) => {
  return <div>
    <button id={styles.button} onClick={onClick} type = {type}>
      {title}
    </button>
  </div>
  
})

export default Button