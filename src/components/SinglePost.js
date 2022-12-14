import React,{useEffect,useState} from 'react'
import client from "../client.js";
import { useParams } from 'react-router-dom';
// import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

// const builder = imageUrlBuilder(client);
// function urlFor(source) {
//   return builder.image(source);
// }

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client.fetch(`*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body

    }`).then((data) => setSinglePost(data[0])).catch(console.error);
  }, [slug]);

  if(!singlePost) return <div>Loading...</div>

  return(
    <main className='bg-violet-700 min-h-screen p-12'>
      <article className='container mx-auto bg-green-100 rounded-lg relative'>
        <header className='relative'>
          {/* <div className='absolute h-full w-full flex items-center justify-center p-8 max-w-full'> */}
            {/* <div className='bg-white bg-opacity-75 rounded p-12'> */}
              {/* <h1 className='cursice text-3xl lg:txt-6xl mb-4'>
                {singlePost.title}
              </h1> */}

              {/* <div className='flex justify-center text-gray-800'>
                <img src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className='w-10 h-10 rounded-full'
                />
              </div> */}
              {/* <p className='cursive flex justify-center pl-2 text-2xl'>{singlePost.name}</p> */}
            {/* </div> */}
          {/* </div> */}
          <img src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className='w-full object-cover rounded-t'
            style={{height: '400px'}}
          />
        </header>
      </article>
      <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl relative bg-yellow-500 max-w-full'>
              <h1 className='cursice text-3xl lg:txt-6xl mb-4'>
                {singlePost.title}
              </h1>
              <BlockContent blocks={singlePost.body} projectId="7ab2b2wj" dataset="production" />
      </div>
    </main>
  )
}

export default SinglePost