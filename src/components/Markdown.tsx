import ReactMarkdown from "react-markdown"

interface MarkdwonProps {
    children: string
}

export default function Markdown ({children}: MarkdwonProps) {
    return <ReactMarkdown
    className="space-y-3"
    components={{
        ul: (props) => <ul className="list-inside list-disc" {...props}/>,
        a: (props) => <a className="text-green-500 underline" target="_blank" {...props}/>
    }}>
        {children}
    </ReactMarkdown>
}