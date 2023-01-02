import styles from '../styles/Home.module.css'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'


export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true),[])

  // mounted is used due to hydration problem
  if(!mounted){
    return null;
  }

  return (
    <>
      <main>
        <div className={styles.description}>
          <button onClick={() => setTheme('light')}>set light</button>
          <button onClick={() => setTheme('dark')}>set dark</button>
          <p>theme : {theme}</p>
        </div>
      </main>
    </>
  )
}
