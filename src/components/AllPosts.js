import sanityClient from '../client.js';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const AllPosts = () => {

const [allPostsData, setallPosts] = useState(null);

    useEffect(() => {
      sanityClient.fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
        }
    }
    }`).then((data) => setallPosts(data)).catch(console.error);},[]);
    

  return (
    <div>
        <h2>Blog Posts</h2>
        <h3>
            Welcome to my blog!
        </h3>
        <div>
           {allPostsData &&
           allPostsData.map((post,index)=>(
            <Link to={"/"+post.slug.current} key={post.slug.current}>
                <span key={index}>
                    <img src={post.mainImage.asset.url} alt={post.title}/>
                    <span>
                        <h2>{post.title}</h2>
                    </span>
                </span>
            </Link>
           ))}
        </div>
    </div>
  )
}

export default AllPosts