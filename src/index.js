import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <button className={styles[type]}>
      {capitalizeFirstLetter(type)} Button
    </button>
  )
}
