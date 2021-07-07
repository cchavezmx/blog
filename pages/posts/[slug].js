import markdownToHtml from '../api/markdownToHtml'
import { getAllPosts, getPostBySlug } from '../api/apiBlog'

const Posts = ({ post }) => {
  return (
  <>
    <h1>Ya te medicaste</h1>
  </>
  )
}

export async function getStaticProps ({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug'

  ])
  const content = await markdownToHtml(post.content || '')

  return {
    post: {
      ...post,
      content
    }
  }
}

export async function getStaticPatchs () {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
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
