import markdownToHtml from '../api/markdownToHtml'
import { getAllPosts, getPostBySlug } from '../api/apiBlog'

const Posts = ({ post }) => {
  return (
  <>
    { console.log(post)}
    <h1>Ya te medicaste</h1>
  </>
  )
}
export async function getStaticProps ({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths () {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}

export default Posts
