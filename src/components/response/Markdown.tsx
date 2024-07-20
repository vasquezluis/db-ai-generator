// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Markdown = ({ markdown }: { markdown: string }) => {
	return (
		// <ReactMarkdown
		// 	remarkPlugins={[remarkGfm]}
		// 	rehypePlugins={[rehypeRaw]}
		// 	components={{
		// 		code({ node, inline, className, children, ...props }: any) {
		// 			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unsafe-argument
		// 			const match = /language-(\w+)/.exec(className || '')

		// 			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
		// 			return !inline && match ? (
		// 				<SyntaxHighlighter
		// 					style={dracula}
		// 					PreTag='div'
		// 					showLineNumbers
		// 					language={match[1]}
		// 					{...props}
		// 				>
		// 					{String(children).replace(/\n$/, '')}
		// 				</SyntaxHighlighter>
		// 			) : (
		// 				<code className={className} {...props}>
		// 					{children}
		// 				</code>
		// 			)
		// 		},
		// 	}}
		// >
		// 	{markdown}
		// </ReactMarkdown>
		// )

		<SyntaxHighlighter language='sql' showLineNumbers style={dracula}>
			{markdown}
		</SyntaxHighlighter>
	)
}

export default Markdown
