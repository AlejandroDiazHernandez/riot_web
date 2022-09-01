import styled from '@emotion/styled'
import { ChangeEvent, useState } from 'react'

interface Form {
	search: string
}

const Search: React.FC = () => {
	const [form, setForm] = useState<Form>({
		search: '',
	})

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[event.target.id]: event.target.value,
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		alert(form.search)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="search"></label>
				<InputSearch
					id="search"
					type="text"
					placeholder="Search"
					autoComplete="off"
					value={form.search}
					onChange={handleChange}
				/>
			</div>
		</form>
	)
}

export default Search

const InputSearch = styled.input`
	border-radius: 8px;
	height: 20px;
	color: white;
	background-color: #2f2b2b;
	border: 0;
	text-transform: uppercase;
	font-weight: bold;
	padding-left: 15px;
	font-size: 12px;
	:focus {
		outline: none;
	}
`
