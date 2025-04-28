import { hygraphFetch } from './hygraphClient.service'

export const deletePost = async (id: string) => {
	const mutation = `
    mutation DeletePost($id: ID!) {
      deletePost(where: { id: $id }) {
        id
      }
    }
  `

	return await hygraphFetch(mutation, { id })
}
