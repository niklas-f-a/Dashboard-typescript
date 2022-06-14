import style from '../styles/news.module.scss'
import NewsArticle from './NewsArticle'
import { v4 as uuidv4 } from 'uuid'
import { useFetchWithInterval } from '../hooks/useFetchWithInterval'
import React, { ReactElement, useEffect, useState } from 'react'


const _1HOUR = 3_600_000
const _1MINUTE = 60_000

const newsUrl = process.env.REACT_APP_NEWS_URL ?? '/news'



const NewsFeed: React.FC = (): ReactElement => {

  const { loading, error, data: news } = useFetchWithInterval(newsUrl, _1HOUR)
  const [shuffledArticles, setShuffledArticles] = useState([])

  const shuffleNews = (): void => {
    setShuffledArticles(news?.results.sort(() => Math.random() - 0.5).slice(0, 2))
  }


  useEffect(() => {
    if(!news?.results) return
    console.log(news);

    shuffleNews()
    setInterval(shuffleNews, _1MINUTE)

  }, [news])


  return (
    <section className={style.newsFeed}>
      <h2>Nyheter</h2>
      {error && <p>{error.message}</p>}
      <div>
        {loading && <p>Loading...</p>}
        {shuffledArticles && shuffledArticles.map(news => <NewsArticle news={news} key={uuidv4()} />)}
      </div>
    </section>
  )
}

export default NewsFeed