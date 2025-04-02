import React from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

// https://github.com/UmaSahni/JSON_Server_Deployment

const toolList = [
    {
        title: 'UI Library',
        url: '/ui-library'
    },
    {
        title: 'VS Code Extension',
        url: '/vs-code-extension'
    },
]

const Home = () => {

    return (
        <>
            <Title title="Tool" />
            <div className="flex items-center flex-wrap gap-6 px-8">
                {
                    toolList.map((tool, index) => (
                        <Link
                            key={index}
                            to={tool.url}
                            className="text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-4 flex items-center mb-4"
                        >
                            <span>{tool.title}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 ml-2" >
                                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    ))
                }
            </div>

        </>
    )
}

export default Home