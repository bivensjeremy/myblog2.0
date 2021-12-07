import { v4 as uuidv4 } from "uuid";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res){
    
    const client = await clientPromise
    const db = client.db('blogDB');

    const { title, content, category, date } = req.body
    
    await db.collection('MyBlogPosts').insertOne({
        title: title,
        content: content,
        category: category,
        date: date,
        postId: uuidv4(),
    }),
    res.json({
        status: 'success'
    })
}