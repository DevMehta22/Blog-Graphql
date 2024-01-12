const {pool} = require('../db/db');
const Pool = pool.promise();

const resolvers = {
    Query: {
        getPost:async(_,{id})=>{
            const [rows] = await Pool.query('select * from posts where id = ?',[id]);
            return rows[0];
        },
        getAllPosts:async()=>{
            const rows = await Pool.query('select * from posts');
            return rows[0];
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