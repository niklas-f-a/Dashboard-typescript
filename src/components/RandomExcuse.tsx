import style from '../styles/RandomExcuse.module.scss'
import { useFetchWithInterval } from '../hooks/useFetchWithInterval'
import React, { ReactElement } from 'react'



const _30s = 30_000

const excuseUrl = process.env.REACT_APP_EXCUSE_URL ?? '/excuse'


const RandomExcuse: React.FC = (): ReactElement => {

  const { loading, error, data: excuse } = useFetchWithInterval(excuseUrl, _30s)


  return (
    <div className={style.excuse}>
      <h2>En ursäkt</h2>
      <article>
        {error && error.message}
        {loading && !excuse && <p>Loading...</p>}
        {excuse && <p>{excuse[0].excuse}</p>}
      </article>
    </div>
  )
}

export default RandomExcuse