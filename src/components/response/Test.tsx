import './test.css'

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| 1 | 2 |
| 3 | 4 |
`

const Test = () => {
	return (
		<div>
			<Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
		</div>
	)
}

export default Test
