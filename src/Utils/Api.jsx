import axios from "axios";

const storedUser = localStorage.getItem("user");

const BASE_URL = `https://nc-news-iweb.onrender.com/api`;

export const fetchAllArticles = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString
    ? `${BASE_URL}/articles?${queryString}`
    : `${BASE_URL}/articles`;

  return axios.get(url).then((response) => {
    return response.data.articleData;
  });
};

export const fetchArticlesByTopic = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();

  return axios
    .get(`${BASE_URL}/articles?${queryString}`)
    .then((response) => {
      return response.data.articleData;
    });
};

export const fetchArticleById = (article_id) => {
  return axios.get(`${BASE_URL}/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const fetchCommentsByArticleId = (article_id) => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.commentData;
    });
};

export const fetchAllUsers = () => {
  return axios
    .get(`${BASE_URL}/users`)
    .then((response) => {
      return response.data.userData;
    })
    .catch((error) => {
      return error;
    });
};

export const patchVotesByArticle_Id = (article_id, inc_votes) => {
  return axios
  .patch(`${BASE_URL}/articles/${article_id}`, {inc_votes})
  .then((response)=> {
    return response.data.articleData})
  .catch((err)=> {
    console.log(`Error: ${err}`)}
  )
};

export const postCommentByArticle_Id = (article_id, commentData) => {
  return axios
    .post(`${BASE_URL}/articles/${article_id}/comments`,
       {
      username: storedUser,
      body: commentData,
    }
  )
    .then((response) => response.data.commentData);
};

export const deleteCommentByCommentId = (comment_id) => {
  return axios.delete(`${BASE_URL}/comments/${comment_id}`);
};

export const fetchAllTopics = () => {
  return axios
    .get(`${BASE_URL}/topics`)
    .then((response) => response.data.topicData);
};

export const fetchUserByUsername = (username) => {
  return axios
    .get(`${BASE_URL}/users/${username}`)
    .then((response) => response.data.userData);
};
