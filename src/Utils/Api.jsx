import axios from "axios";

export const fetchAllArticles = () => {


    return axios
      .get(`https://nc-news-iweb.onrender.com/api/articles`)
      .then((response)=>{

        return response.data.articleData;
      })
}
