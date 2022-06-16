import { ReactElement } from "react"
interface News{
  title: string
  description: string
  source_id: string
}
interface NewsArticleProps{
  news: News
}

const NewsArticle = ({news}: NewsArticleProps): ReactElement => {
  return (
    <article>
      <h4>{news.description}</h4>
      <p>{news.description}</p>
      <small>{news.source_id}</small>
    </article>
  )
}

export default NewsArticle