import styles from '../styles/clock.module.scss'
import { useState, useEffect } from 'react'

const HOURS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


export default function Clock(){

  const [today, setToday] = useState(new Date())

  const tick = (): void => {
    setToday(new Date())
  }

  useEffect(() => {

    setInterval(tick, 1000)

  }, [])


  const secondDegree = (): number => ((today.getSeconds() / 60) * 360) + 360

  const minuteDegree = (): number => ((today.getMinutes() / 60) * 360)

  const hourDegree = (): number => ((today.getHours() / 12) * 360)

  const padDate = (date: number): string => String(date).padStart(2, '0')

  return (
    <section className={styles.clock}>
      <div className={styles.circle}>
        <div className={styles.center}></div>
        <div style={{transform: `rotate(${hourDegree()}deg)`}} className={styles.hour}></div>
        <div style={{transform: `rotate(${minuteDegree()}deg)`}} className={styles.minute}></div>
        <div style={{transform: `rotate(${secondDegree()}deg)`}} className={styles.second}></div>
        <div className={styles.digital}>
          <span>
            <strong>{padDate(today.getHours())}:{padDate(today.getMinutes())}</strong>
            <small> {padDate(today.getSeconds())}</small>
          </span>
        </div>
        <ul>
          {HOURS.map(hour => <li key={hour}>{hour}</li>)}
        </ul>
      </div>
    </section>
  )
}