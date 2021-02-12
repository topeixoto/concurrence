const retrievePosts = require("../posts");

describe('Posts', () => { 

    it("retrieve posts list", async () => {
        const posts = await retrievePosts();
        expect(posts).toEqual(1);
    });
});