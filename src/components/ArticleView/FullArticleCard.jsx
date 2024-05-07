import { useEffect } from "react";
import { fetchArticleById } from "../../Utils/Api"

const FullArticleCard = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [fullArticle, setFullArticle] = useState({})
    
    useEffect(()=>{
        fetchArticleById().then((article)=>{
            setFullArticle(article)
            setIsLoading(false);
        })
    },[])
    
    if (isLoading) return <p>Loading your lovely, lovely content ...</p>
    
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