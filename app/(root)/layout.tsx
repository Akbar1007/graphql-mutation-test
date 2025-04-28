import { ChildProps } from '@/types'

const Layout = ({ children }: ChildProps) => {
	return (
		<main>
			<div className='container justify-center flex'>{children}</div>
		</main>
	)
}

export default Layout
