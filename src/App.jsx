/* eslint-disable no-useless-escape */
import { useState } from "react"
import Editor from "./components/Editor"
import Markdown from "./components/Markdown"

function App() {

  const [text, setText] = useState("### Add your markdown here")

  function handleChange(e) {
    setText(e.target.value)
  }

  function markdownToHtml(markdown) {
    return markdown
      // Convert headers
      .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
      .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Convert bold and italic
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      // Convert inline code
      .replace(/`(.*?)`/gim, '<br><code>$1</code></br>')
      // Convert links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
      // Convert images
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1">')
      // Convert blockquotes
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      // Convert unordered lists
      .replace(/^\s*[-*+] (.*)/gim, '<ul>\n<li>$1</li>\n</ul>')
      // Convert ordered lists
      .replace(/^\d+\. (.*)/gim, '<ol>\n<li>$1</li>\n</ol>')
      // Convert line breaks
      // Fix lists (to handle multiple list items)
      .replace(/<\/ul>\n<ul>/gim, '')
      .replace(/<\/ol>\n<ol>/gim, '')
      .replace(/^(\*\*\*|---|\-\-\-)$/gim, '<hr/>')
      // Convert code blocks
      .replace(/```([^```]+)```/gim, '<pre><code>$1</code></pre>')
      // Convert line breaks (two spaces at end of line)
      .replace(/ {2,}\n/gm, '<br/>')
      // Fix lists (to handle multiple list items)
      .replace(/<\/ul>\n<ul>/gim, '')
      .replace(/<\/ol>\n<ol>/gim, '')
      .trim();
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-wrap flex-col-reverse md:flex-row md:flex-nowrap gap-6 p-4 sm:p-10">
      <Editor text={text} onChange={handleChange} />
      <Markdown text={markdownToHtml(text)} />
    </div>
  )
}

export default App