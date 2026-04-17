import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase'
import styles from './ProfileMenu.module.css'

export default function ProfileMenu() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}></div>
      <span>
        {user ? user.email : 'Гость'}
      </span>
    </div>
  )
}