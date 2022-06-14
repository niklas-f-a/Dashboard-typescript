
interface Props{
  news: {
    title: string
    description: string
    source_id: string
  }
}

export default function NewsArticle({news}: Props){
  return (
    <article>
      <h4>{news.title}</h4>
      <p>{news.description}</p>
      <small>{news.source_id}</small>
    </article>
  )
}