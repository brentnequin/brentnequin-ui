export const actions = {
    async getPosts () {
        let posts = await this.$axios.$get('/posts')
        return posts
    }
}