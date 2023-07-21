import React from 'react'

function Header(props) {

    const messageHtml = '<p>The short URL generator app developed as personal side project. Built using React.js for the front-end, Spring Boot for the back-end, JPA for database access, and MySQL as the database.</p> <br> <strong>Features:</strong> <br>  <ul> <li><i>URL Shortening</i>: Users can input a long URL, and the app will generate a shortened version of it, making it more convenient to share and use.</li> <li><i>Access Using Short URL</i>: The short URLs created can be used to access the original long URLs. When a user enters a short URL in the browser, they will be redirected to the corresponding long URL.</li> <li><i>Interface Options</i>: The app provides a user-friendly interface where users can easily open the original site directly from the UI and also copy the short URL to share it with others.</li> <li><i>Automatic Deletion</i>: Unused short URLs that have not been accessed in the last 10 days will be automatically deleted from the database, ensuring the system efficiency and preventing clutter.</li> </ul ><br> <p>Overall, this app provides a simple and efficient solution for generating and managing short URLs, making it easier for users to share links and access sites with minimal effort.</p><br><strong>Developer:</strong><br><ul><li>Soumyabrata Sarkar</li><li>https://github.com/scode24</li></ul>';

    return (
        <div className='flex flex-row justify-between px-20 p-7 shadow-md max-md:p-5'>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-center mr-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='font-bold text-base'>URL Shortener</span>
                </div>
            </div>

            <div className='flex flex-col justify-center cursor-pointer' onClick={() => props.openCloseDialog('open', 'info', messageHtml)}>
                <span>About</span>
            </div >
        </div>
    )
}

export default Header