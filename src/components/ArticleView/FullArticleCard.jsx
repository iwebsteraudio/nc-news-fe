

const FullArticleCard = (article)=>{

    return (
        <>
        <h2>title: {article.title}</h2>
        <p>body: { article.body }</p>
        <p>date: { article.created_at }</p>
        <p>author: { article.author }</p>
        </>
    )
}

export default FullArticleCard;