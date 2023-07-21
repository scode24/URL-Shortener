import React from 'react'

function UrlInfoCard(props) {

    const { shortUrl, longUrl } = props.urlInfo;

    const copyToClipboard = () => {
        const textToCopy = document.getElementById("textToCopy").innerText;

        // Create a temporary textarea element to hold the text
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = textToCopy;

        // Append the textarea to the body
        document.body.appendChild(tempTextArea);

        // Select the text inside the textarea
        tempTextArea.select();

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the temporary textarea from the body
        document.body.removeChild(tempTextArea);
    }

    return (
        <div className='flex flex-row justify-between p-7 border-b-2 max-md:p-3'>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-center items-center mr-7 bg-black max-md:mr-3' style={{ 'height': '50px', 'minWidth': '50px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                </div>
                <div className='flex flex-col justify-center '>
                    <span id='textToCopy' className='text-2xl max-md:text-base max-md:font-bold'>{shortUrl}</span>
                    <span>{longUrl}</span>
                </div>
            </div>

            <div className='flex flex-row'>

                <div class="custom-tooltip">
                    <button className='mr-5 max-md:mr-2 active:bg-black active:text-white' onClick={() => copyToClipboard()}>
                        <div className='flex flex-col justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>
                        </div>
                    </button>
                    <div class="tooltip-text">Copy short url</div>
                </div>


                <div class="custom-tooltip">
                    <button className='mr-5 max-md:mr-0 active:bg-black active:text-white' onClick={() => window.open(longUrl)}>
                        <div className='flex flex-col justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>
                        </div>
                    </button>
                    <div class="tooltip-text">Open site</div>
                </div>

            </div>
        </div>
    )
}

export default UrlInfoCard