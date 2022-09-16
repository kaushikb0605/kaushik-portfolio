import React,{useState,useEffect} from 'react';
import client from '../client.js';
import background from '../about_bg.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(client);

function urlFor(source){
  return builder.image(source);
}


const About = () => {
  const [author, setauthor] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`).then((data) => setauthor(data[0])).catch(console.error);
  }, []);

  if(!author) return <div>Loading...</div>

  return (
    <main className='relative'>
      <img src={background} alt="About background" className='absolute w-full' />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20' >
          <img src={urlFor(author.authorImage).url()} className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8' alt={author.name} />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-green-300 mb-4'>
              Hey there. I'm{" "}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent blocks={author.bio} projectId="7ab2b2wj" dataset="production" />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About