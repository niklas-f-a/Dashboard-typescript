import style from '../styles/traffic.module.scss'
import React, { ReactElement } from 'react'

interface Props{
  vehicle: {
    LineNumber: number
    Destination: string
    DisplayTime: number
  }
}


const Sign = ({vehicle}: Props): ReactElement  => {

  return (
    <div className={style.sign}>
      <span className={style.topSign}>
        <h4>{vehicle.LineNumber}</h4>
        <h4>{vehicle.Destination}</h4>
      </span>
      <p>Avgår: {vehicle.DisplayTime}</p>
    </div>
    )
}

export default Sign