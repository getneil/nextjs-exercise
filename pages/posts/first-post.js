import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getPost } from '../../lib/posts'

export default function FirstPost({ post }) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const firstPostMd = getPost('first-post-1.md')
  console.log(firstPostMd)
  return {
    props: {
      post: firstPostMd,
      // props for your component
    }
  }
}