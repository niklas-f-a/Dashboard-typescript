import React, { ReactElement } from 'react'
import style from '../styles/OfflineAlert.module.scss'


const OfflineAlert: React.FC = (): ReactElement => {
  return (
    <>
      <div className={style.offlineAlert}>
        <h3>Appen kommer ej att uppdateras under tiden som du är offline.</h3>
        <h3>Informationen du ser är troligtvis föråldrad.</h3>
      </div>
    </>
  )
}


export default OfflineAlert