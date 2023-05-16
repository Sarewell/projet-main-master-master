
import React from 'react'
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '@/components/layout/Layout';


const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


//2.generere ou recupperrer ts les slug de mes articles

export  async function getStaticPaths() {
//a-recupere les posts ds le contentful
const res = await client.getEntries({
  content_type: "project",


});

//b- recuperes les slug des posts
const slugs = res.items.map((slug) => {
  return {
    params: { slug: slug.fields.slug },
  };
});

//c-renvoie tous les slugs ds path (chemin //route)
return {
  paths: slugs,
  fallback: false // tous les slug qui ne st pas ds mon path => page 404
};
}


// 3- recuperre data du post en fonction du slug
export async function getStaticProps({ params }) {
  console.log("params:", params);
  //A.Recupere la data lié au slug

  const res = await client.getEntries({
    content_type: 'project',
    "fields.slug": params.slug
  });

  // b-je stock la data du post ds une variables
  const post = res.items;

  return {
    props: {
      post: post[0],
    }
  }
}

export default function Index({ post }) {
  console.log("post:", post);
  const { title, description, images, subtitle } = post.fields;
  return (
    <Layout>
    <div className='mb-[10%] bg-slate-100 p-3 rounded-md mx-[20%]'>
      <img
        src={ images.fields.file.url}
        alt={title} className='rounded-md'
      />
    <p className='text-3xl capitalize font-bold pt-10  '>{title}</p>
    <p className='pb-10'>{subtitle}</p>
    <div className='p-3 bg-slate-200 rounded-md'>{documentToReactComponents(description
)}</div>
<div className=''></div>
  </div>
  </Layout>
  );
}
