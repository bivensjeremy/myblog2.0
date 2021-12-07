import clientPromise from '../../lib/mongodb';

export default async function handler(req, res){
    const client = await clientPromise
    const db = client.db('blogDB');
    const data = await db.collection('MyBlogPosts').find({}).toArray()

    // res.status(200).json(data)
    res.json(data);
}