import { hygraphFetch } from './hygraphClient.service'

export const createPost = async (title: string, content: string) => {
	const mutation = `
    mutation CreatePost($title: String!, $content: String!) {
      createPost(data: { title: $title, content: $content }) {
        id
        title
      }
    }
  `

	const variables = { title, content }
	return await hygraphFetch(mutation, variables)
}
