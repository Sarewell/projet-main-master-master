
import ProjectCard from "@/components/cards/ProjectCard";
import Layout from "@/components/layout/Layout";
import About from "@/components/section/homePage/About";
import Blog from "@/components/section/homePage/Blog";
import Contact from "@/components/section/homePage/Contact";
import Projet from "@/components/section/homePage/Projet";
import { createClient } from "contentful";
import Link from "next/link";


export default function Home({posts}) {
  console.log(posts);
  return (
    
      <Layout>
        <About/>
        <Projet posts={posts}/>
       
        <Blog />
        <Contact/>
      </Layout>

    
  )
}
export async function getStaticProps( ) {
//1 connect to contentful
const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//2 recuperer data en cas de success pour le content_type => escciBlog
//je limite a 8 posts
const data = await client.getEntries({
  content_type: 'project',
  order:"",
  limit: 9,
});


console.log( data);
//3.on envoie la data ds le props de ma page
return{
  props:{
    posts:data.items,
    }
  }
  

  
}





