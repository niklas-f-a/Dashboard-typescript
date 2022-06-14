import { createContext, useState, useEffect } from 'react'


const OnlineContext = createContext<Boolean | null>(null)

interface Props{
  children: React.ReactNode
}

function OnlineContextProvider({children}: Props){

  const [online, setOnline] = useState<Boolean>(navigator.onLine ? true : false)

  const setOnlineTrue = (): void => {
    setOnline(true)
  }

  const setOnlineFalse = (): void => {
    setOnline(false)
  }

  useEffect(() => {

    window.addEventListener('online', setOnlineTrue)
    window.addEventListener('offline', setOnlineFalse)

    return () => {
      window.removeEventListener('online', setOnlineTrue)
      window.removeEventListener('offline', setOnlineFalse)
    }
  }, [])


  return (
    <OnlineContext.Provider value={online}>
      {children}
    </OnlineContext.Provider>

  )
}



export { OnlineContextProvider, OnlineContext }