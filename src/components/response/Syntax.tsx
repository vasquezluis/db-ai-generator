import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Syntax = ({ script }: { script: string }) => {
	return (
		<SyntaxHighlighter language='sql' showLineNumbers style={dracula}>
			{script}
		</SyntaxHighlighter>
	)
}

export default Syntax
