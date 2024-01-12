const {gql} = require('apollo-server-express');

const typedefs = gql`
type Post {
    id :ID!
    title :String!
    content: String!
    comments: [Comment]!
}
type Comment {
    id :ID!
    text:String!
}
type Query{
    getPost(id: ID!) : Post
    getAllPosts :[Post]
}
type Mutation{
    createPost (title: String!,content: String!) : Post
    addComment(postId: ID!, text: String!) : Comment
}
`;

module.exports = typedefs;