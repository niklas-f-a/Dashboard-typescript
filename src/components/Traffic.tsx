import style from '../styles/traffic.module.scss'



export default function Traffic(){
  return (
    <>
      {/* {!online
        ? <OfflineAlert />
        : <section className={style.traffic}>
        <div className={style.left}>
          <article className={style.upperLeft}>
            <h2>Bussar</h2>
            {error && <p>{error.message}</p>}
            <div className={style.departures}>
              {loading && <p>Loading...</p>}
              {traffic?.ResponseData?.Buses && !loading && !loading && traffic.ResponseData.Buses.splice(0, 3).map(bus => <Sign vehicle={bus} key={uuidv4()} />)}
            </div>
          </article>
          <article className={style.bottomLeft}>
            <h2>Tunnelbana</h2>
            {error && <h1>{error.message}</h1>}
            <div className={style.departures}>
              {loading && <p>Loading...</p>}
              {traffic?.ResponseData?.Metros && !loading && traffic?.ResponseData?.Metros.splice(0, 3).map(metro => <Sign vehicle={metro} key={uuidv4()} />)}
            </div>
          </article>
        </div>
        <div className={style.right}>
          <h2>Tvärbana</h2>
          {error && <h1>{error.message}</h1>}
          <article>
            {loading && <p>Loading...</p>}
            {traffic?.ResponseData?.Trams && !loading && traffic?.ResponseData?.Trams.splice(0, 2).map(tram => <Sign vehicle={tram} key={uuidv4()} />)}
          </article>
        </div>
      </section>
      } */}
    </>
  )
}