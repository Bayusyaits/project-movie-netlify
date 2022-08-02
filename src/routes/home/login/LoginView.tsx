import React from 'react'
import styles from './login.module.css'


interface Props {
  onSuccess: (param: unknown) => void
  onFailure: (param: unknown) => void
}

function LoginView({ onSuccess, onFailure }: Props) {
  return (
    <div>
      <div className={styles.card}>
        <p className={styles.heading}>Log In</p>
        <p className={styles.name}>{import.meta.env.VITE_APP_NAME}</p>
        Login
      </div>
    </div>
  )
}

export default LoginView
