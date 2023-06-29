const PostsService = class {

    constructor (apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
    }

    async getAllPosts(limit) {

        var response = await fetch(`${this.apiBaseUrl}/posts?_limit=${limit}`);
        var posts = await response.json();
        return posts;
    }

    async createNewPost(post) {
        var response = await fetch(`${this.apiBaseUrl}/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        
        var json = await response.json();
        return json;
    }

    async updatePost(post) {
        var response = await fetch(`${this.apiBaseUrl}/posts?id=${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        
        var jsonResponse = await response.json();
        return jsonResponse;
    }

    async deletePost(id) {
        var response = await fetch(`${this.apiBaseUrl}/posts?id=${id}`, {
            method: 'DELETE'
        });
        var jsonResponse = await response.json();
        return jsonResponse;
    }

}