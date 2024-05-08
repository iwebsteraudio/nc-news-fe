import axios from "axios";

export const fetchAllArticles = () => {
    return axios
      .get(`https://nc-news-iweb.onrender.com/api/articles`)
      .then((response)=>{

        return response.data.articleData;
      })
}

export const fetchArticleById = (article_id) => {
  return axios
  .get(`https://nc-news-iweb.onrender.com/api/articles/${article_id}`)
  .then((response)=>{
    return response.data.article;
  })
}

export const fetchCommentsByArticleId = (article_id) => {
  return axios
  .get(`https://nc-news-iweb.onrender.com/api/articles/${article_id}/comments`)
  .then((response)=>{
    return response.data.commentData;
  })
}