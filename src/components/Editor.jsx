/* eslint-disable react/prop-types */

function Editor({ text, onChange }) {

    return (
        <textarea className="border border-gray-700 bg-gray-800 rounded-lg w-full p-5 text-gray-200 resize-none outline-none font-mono" value={text} onChange={onChange} />
    )
}

export default Editor