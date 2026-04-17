import { useState } from 'react'
import styles from './AuthForm.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { supabase } from '../../services/supabase'

type AuthMode = 'login' | 'register'

export default function AuthForm() {
  const [mode, setMode] = useState<AuthMode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (mode === 'register') {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name
          }
        }
      })
  
      if (error) {
        console.error(error.message)
        return
      }
  
      console.log('registered:', data)
    }
  
    if (mode === 'login') {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
  
      if (error) {
        console.error(error.message)
        return
      }
  
      console.log('logged in:', data)
    }
  }

  const handleGuest = () => {
    console.log('guest mode')
  }

  return (
    <div className={styles.card}>
      <div className={styles.logo}>ProductTracker</div>
      <p className={styles.subtitle}>
        {mode === 'login' ? 'Войдите в аккаунт' : 'Создайте аккаунт'}
      </p>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${mode === 'login' ? styles.tabActive : ''}`}
          onClick={() => setMode('login')}
          type="button"
        >
          Войти
        </button>
        <button
          className={`${styles.tab} ${mode === 'register' ? styles.tabActive : ''}`}
          onClick={() => setMode('register')}
          type="button"
        >
          Регистрация
        </button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {mode === 'register' && (
          <Input
            id="name"
            name="name"
            label="Имя"
            placeholder="Ваше имя..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Пароль"
          placeholder="Минимум 6 символов"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="primary">
          {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </form>

      <div className={styles.divider}>
        <span>или</span>
      </div>

      <Button type="button" variant="secondary" onClick={handleGuest}>
        Войти как гость
      </Button>
    </div>
  )
}