import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import client from '../client.js';

const Food = () => {

    const [postData, setPost] = useState(null);
    useEffect(() => {
        client.fetch(`*[_type == "food"]{
            title,
            slug,
            place,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }
        `).then((data) => setPost(data)).catch(console.error);
    }, []);
  return (
    <main className='min-h-screen p-12 relative'>
        <section className='container mx-auto'>
            <h1 className='text-5xl flex justify-center cursive'>Yummy food</h1>
            <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Food keeps me going. So it deserves a special page. Isn't it?</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {postData && postData.map((post, index) => (
                
                <article key={index}>
                <Link to={"/post/"+post.slug.current} key={post.slug.current}>
                    <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400' key={index}>
                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                            className='w-full h-full rounded-r object-cover absolute'/>
                        <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                            <h3 className='text-gray-800 text-lg font-bold px-3 py-4 bg-white text-red -100 bg-opacity-75 rounded'>{post.title}</h3>
                        </span>
                    </span>
                    </Link>
                </article>
                ))}
            </div>
        </section>
    </main>
  )
}

export default Food