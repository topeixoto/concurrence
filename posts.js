const axios = require("axios");
module.exports = axios();

module.exports = retrievePosts = (url) => {
    try {
        console.log(axios.get(url));
        return axios.get(url);       
    } catch (error) {
        console.log("error");
        new throwError(error);
    }
}; 
