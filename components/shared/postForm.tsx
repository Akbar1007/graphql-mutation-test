'use client'

import { createPost } from '@/services/createPost.service'
import { useState } from 'react'
import { Skeleton } from '../ui/skeleton'

export default function PostForm() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		try {
			const post = await createPost(title, content)
			console.log('Created:', post)
			// TODO: replace alert with a toast notification
			alert('Post created!')
			setTitle('')
			setContent('')
		} catch (error) {
			console.error(error)
			alert('Something went wrong!')
		}
		setLoading(false)
	}

	return (
		<div>
			{loading ? (
				<Skeleton />
			) : (
				<form
					onSubmit={handleSubmit}
					className='space-y-4 max-w-md mx-auto p-4 border rounded bg-white'
				>
					<input
						type='text'
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder='Title'
						className='w-full p-2 border rounded text-black'
						required
					/>
					<textarea
						value={content}
						onChange={e => setContent(e.target.value)}
						placeholder='Content'
						className='w-full p-2 border rounded text-black'
						rows={4}
						required
					/>
					<button
						type='submit'
						className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
						disabled={loading}
					>
						{loading ? 'Submitting...' : 'Create Post'}
					</button>
				</form>
			)}
		</div>
	)
}
