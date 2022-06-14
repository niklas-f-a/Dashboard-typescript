import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'


const BASE_URL = process.env.REACT_APP_BASE_URL_API

interface ApiResponse{
  data: any
  error: any
  loading: Boolean
}


export const useFetchWithInterval = (url: string, intervalTime: number): ApiResponse => {

  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>()

  const fetchData = (): void => {
    axios.get(BASE_URL+url)
      .then((res: AxiosResponse) => setData(res.data))
      .catch((error: {}) => setError({message: "Something went wrong"}))
      .finally(() => setLoading(false))
  }

  useEffect(() => {

    fetchData()
    const stopInterval = setInterval(fetchData, intervalTime)

    return () => clearInterval(stopInterval)

  }, [])


  return { data, loading, error }
}