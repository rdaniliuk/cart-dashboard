import React from 'react'
// @ts-ignore
import styles from './DeleteButton.module.css'
import { iButton } from '../createButton/CreateButton';


function DeleteButton(props: iButton) {
  return (
    <button className={styles.wrapper} onClick={props.onClick}>
      <img src="https://img.icons8.com/arcade/256/delete-forever.png" alt="del-button" />
    </button>
  )
}

export default DeleteButton