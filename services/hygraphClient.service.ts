const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

const HYGRAPH_TOKEN = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN!

export const hygraphFetch = async (query: string, variables = {}) => {
	const res = await fetch(HYGRAPH_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${HYGRAPH_TOKEN}`,
		},
		body: JSON.stringify({ query, variables }),
	})

	const data = await res.json()
	if (data.errors) {
		throw new Error(data.errors[0].message)
	}

	return data.data
}
