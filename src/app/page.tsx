import { Typography } from '@mui/material'
import styles from './page.module.css'
import UserFormDialog from './user-form'

export default function Home() {
  return (
    <main className={styles.main}>
      <UserFormDialog />
    </main>
  )
}
