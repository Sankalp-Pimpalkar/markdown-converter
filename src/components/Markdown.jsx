
/* eslint-disable react/prop-types */

import { useState } from "react";

function Markdown({ text }) {

    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);

        const timeout = setTimeout(() => {
            setIsCopied(false);
        },2000)

        return () => clearTimeout(timeout);
    };

    return (
        <div className="relative border border-gray-700 bg-gray-800 rounded-lg w-full min-h-40 p-5 text-gray-300">
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 px-3 py-2 text-sm bg-gray-600 rounded-md hover:bg-gray-700">
                {isCopied ? "Copied!" : "Copy to Clipboard"}
            </button>

            <div className="overflow-y-auto">
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    );
}

export default Markdown;
