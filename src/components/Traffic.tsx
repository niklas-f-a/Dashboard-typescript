import React, { useState, useContext, ReactElement } from 'react'
import { useFetchWithInterval } from '../hooks/useFetchWithInterval'
import style from '../styles/traffic.module.scss'
import Sign from './Sign'
import { v4 as uuidv4 } from 'uuid'
import { OnlineContext } from '../contexts/OnlineContext'
import OfflineAlert from './OfflineAlert'

const _1Minute = 60_000

const departuresUrl = '/departures'


const Traffic: React.FC = (): ReactElement => {

  const [intervalTime] = useState(_1Minute)
  const  onlineContext  = useContext(OnlineContext)
  const { data: traffic, error, loading } = useFetchWithInterval(departuresUrl, intervalTime)


  return (
    <>
      {!onlineContext?.online
        ? <OfflineAlert />
        : <section className={style.traffic}>
        <div className={style.left}>
          <article className={style.upperLeft}>
            <h2>Bussar</h2>
            {error && <p>{error.message}</p>}
            <div className={style.departures}>
              {loading && <p>Loading...</p>}
              {traffic?.Buses && traffic.Buses.splice(0, 3).map((bus: any) => <Sign vehicle={bus} key={uuidv4()} />)}
            </div>
          </article>
          <article className={style.bottomLeft}>
            <h2>Tunnelbana</h2>
            {error && <h1>{error.message}</h1>}
            <div className={style.departures}>
              {loading && <p>Loading...</p>}
              {traffic?.Metros && !loading && traffic?.Metros.splice(0, 3).map((metro: any) => <Sign vehicle={metro} key={uuidv4()} />)}
            </div>
          </article>
        </div>
        <div className={style.right}>
          <h2>Tvärbana</h2>
          {error && <h1>{error.message}</h1>}
          <article>
            {loading && <p>Loading...</p>}
            {traffic?.ResponseData?.Trams && !loading && traffic?.ResponseData?.Trams.splice(0, 2).map((tram: any) => <Sign vehicle={tram} key={uuidv4()} />)}
          </article>
        </div>
      </section>
      }
    </>
  )
}

export default Traffic