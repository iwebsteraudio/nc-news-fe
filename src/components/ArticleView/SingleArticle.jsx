import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FullArticleCard from './FullArticleCard'
import { fetchAllArticles } from '../../Utils/Api';

const SingleArticle = ()=>{
    const {article_id} = useParams();
    const [article, setArticle] = useState({});


    return (
        <>
        <FullArticleCard article = { article } />
        <CommentSection article = { article } />
        </>
    )
}

export default SingleArticle;