import { ReactElement } from "react"

interface Props{
  news: {
    title: string
    description: string
    source_id: string
  }
}

const NewsArticle = ({news}: Props): ReactElement => {
  return (
    <article>
      <h4>{news.title}</h4>
      <p>{news.description}</p>
      <small>{news.source_id}</small>
    </article>
  )
}

export default NewsArticle