import { hygraphFetch } from './hygraphClient.service'

export const updatePost = async (
	id: string,
	title: string,
	content: string
) => {
	const mutation = `
    mutation UpdatePost($id: ID!, $title: String!, $content: String!) {
      updatePost(where: { id: $id }, data: { title: $title, content: $content }) {
        id
        title
      }
    }
  `

	const variables = { id, title, content }
	return await hygraphFetch(mutation, variables)
}
