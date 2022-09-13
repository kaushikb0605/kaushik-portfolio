import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import  imageUrlBuilder from '@sanity/image-url';


const builder=imageUrlBuilder(sanityClient);

function urlFor(source){
  return builder.image(source);
}

const OnePost = () => {

  const [postData, setpostData] = useState(null);
  const {slug}=useParams();

  useEffect(() => {
    sanityClient.fetch(
      `*[slug.current == "${slug}"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image
    }`,{slug}).then((data) => setpostData(data[0])).catch(console.error);
  }, [slug]);

  if(!postData) return <div>Loading...</div>

  return (
    <div>
      <div>
        <h2>{postData.title}</h2>
        <div>
          <img src={urlFor(postData.authorImage)} alt={postData.title}/>
          <h4>Written by {postData.name}</h4>
        </div>
      </div>
      <img src={urlFor(postData.mainImage).width(200).url()} alt=""/>
      <div>
        <BlockContent 
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}

        />
      </div>
    </div>
  )
}

export default OnePost