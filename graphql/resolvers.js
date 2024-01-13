const {pool} = require('../db/db');
const Pool = pool.promise();

const resolvers = {
    Query: {
        getPost:async(_,{id})=>{
            const [rows] = await Pool.query('select * from posts where id = ?',[id]);
            const[comments] = await Pool.query('select * from comments where post_id = ?',[id]);
            return {...rows[0], comments};
        },
        getAllPosts:async()=>{
            const [rows] = await Pool.query('select * from posts');
            const posts = await Promise.all(
                rows.map(async (post) => {
                  const [commentRows] = await Pool.query('SELECT * FROM comments WHERE post_id = ?', [post.id]);
                  post.comments = commentRows;
                  return post;
                })
              );
            return posts;
        }
    },
    Mutation:{
        createPost:async(_,{title,content})=>{
            const [result] = await Pool.query('insert into posts (title,content) values (?,?)',[title,content]);
            const postId = result.insertId;
            const [rows] = await Pool.query('select * from posts where id =?',[postId]);
            return rows[0];
        },
        addComment:async(_,{postId,text})=>{
            const [result] = await Pool.query('insert into comments (post_id,text) values (?,?)',[postId,text]);
            const commentId = result.insertId;
            const [rows] = await Pool.query('select * from comments where id = ?',[commentId]);
            return rows[0];
        }
    }
}

module.exports = resolvers;