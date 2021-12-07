import Head from 'next/head'
import { server } from '../config'
import AboutMe from '../comps/AboutMe'
import CenterStage from '../comps/CenterStage'
import BlogSection from '../comps/BlogSection'

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/getblogpost`)
  const blogPost = await res.json()
  
  return { props: { blogPost } }
};

export default function Home({blogPost}) {
  
  return (
    <div>
      <Head>
        <title>Blog Page for Bivens Blueprint, LLC</title>
      </Head>

      <main>

        <CenterStage />

        <AboutMe />

        <BlogSection blogPost={blogPost} />

      </main>
    </div>
  )
};