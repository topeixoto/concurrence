const { axios, retrievePosts } = require("../posts");

describe('Posts', () => { 

    it("retrieve posts list", async () => {
        const url = "http://localhost:3000/posts";
        const posts = await retrievePosts(url);
        expect(posts.data.length).toEqual(1);
    });

    it("should throw an error when not exit endpoint", async () => {
        jest.spyOn(axios, "get").and.returnValues(Promise.reject(new throwError()));

        const url = "http://localhost:3000/xpto";

        expect(() => { retrievePosts(url) }).toThrow();
    });
});