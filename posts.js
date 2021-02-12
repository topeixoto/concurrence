const axios = require("axios");

export default retrievePosts = () => (
    axios.get('http://localhost:3000/posts')
); 